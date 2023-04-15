import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import Link from 'next/link';
import { Navbar, useStorage } from '@goshuinsoul/components';
import { useAuth } from '@goshuinsoul/providers';
import moment from 'moment';
import {
  hasuratypes,
  useCreateUserMutation,
} from '@goshuinsoul/database';
import { NextPageWithLayout } from './_app';
import Router from 'next/router';
import { ValidationError, bool, number, object, string } from 'yup';
import { Alert } from 'react-bootstrap';
import set from 'lodash/set';

interface ICheck {
  checkbox1: boolean;
  checkbox2: boolean;
}

const Page: NextPageWithLayout = () => {
  const schema = object().shape({
    first_name: string().required('First Name is required'),
    last_name: string().required('Last Name is required'),
    email: string()
      .required('Please enter your email address')
      .email('Please enter a valid email address'),
    city: string().required('City is required'),
    country: string().required('Country is required'),
    mobile: number().required('Mobile Number is Required'),
  });

  const { getItem } = useStorage();
  const { logout } = useAuth();
  const [createUser] = useCreateUserMutation();
  const [errors, setErrors] = useState<any>();
  const [checkbox, setCheck] = useState<ICheck>({
    checkbox1: false,
    checkbox2: false,
  });

  const userPayload = {
    user_address: getItem('public_key'),
    first_name: getItem('first_name'),
    last_name: getItem('last_name'),
    email: getItem('email'),
    city: '',
    country: '',
    dob: moment().format('DD MMM, YYYY'),
    mobile: '',
  };
  const [userDetails, setUserDetails] =
    useState<hasuratypes.Users_Insert_Input>(userPayload);

  const { setSession } = useAuth();
  const createUserHandler = async () => {
    // if (checkbox?.checkbox1 === false) {
    //   console.log(checkbox);
    //   alert('Please confirm that you are not a US citizen');
    //   return;
    // }
    if (checkbox?.checkbox2 === false) {
      console.log(checkbox);
      alert('Please confirm the terms and conditions');
      return;
    }
    try {
      await schema.validate(userDetails, { abortEarly: false });
      const newUser = await createUser({
        variables: {
          objects: userDetails,
        },
      });
      setSession(newUser.data.insert_users.returning[0]);
      Router.push('/home');
    } catch (error) {
      console.error(error);
      if (error instanceof ValidationError) {
        const _errors = {};
        (error as ValidationError).inner.forEach(
          (err: ValidationError) =>
            err.path && set(_errors, err.path, err.message)
        );
        setErrors(_errors);
      }
    }
  };
  console.log('err', errors);
  return (
    <>
      <Navbar />
      <div className="wrap">
        <div className="container">
          <div className="backBtn mb-10">
            <Link href="/home" onClick={() => logout()}>
              Back
            </Link>
          </div>
        </div>
        <div className="register-area">
          <div className="register-contain">
            <h1>Register</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    value={userDetails.first_name}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({
                        ...userDetails,
                        first_name: e.target.value,
                      });
                    }}
                  />
                  {errors?.first_name && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.first_name}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="" className="floating-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={userDetails.last_name}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({
                        ...userDetails,
                        last_name: e.target.value,
                      });
                    }}
                  />
                  {errors?.last_name && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.last_name}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="" className="floating-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    value={userDetails.email}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({ ...userDetails, email: e.target.value });
                    }}
                  />
                  {errors?.email && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.email}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="" className="floating-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    required
                    value={userDetails.mobile}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({
                        ...userDetails,
                        mobile: e.target.value,
                      });
                    }}
                  />
                  {errors?.mobile && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.mobile}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="" className="floating-label">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={userDetails.city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({ ...userDetails, city: e.target.value });
                    }}
                  />
                  {errors?.city && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.city}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="" className="floating-label">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    value={userDetails.country}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({
                        ...userDetails,
                        country: e.target.value,
                      });
                    }}
                  />
                  {errors?.country && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.country}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="" className="floating-label">
                    Visa Issue Date
                  </label>
                  <input
                    type="date"
                    required
                    value={userDetails.city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({ ...userDetails, city: e.target.value });
                    }}
                  />
                  {errors?.city && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.city}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="boxArea">
                  <label htmlFor="" className="floating-label">
                    Visa Expiry Date
                  </label>
                  <input
                    type="date"
                    required
                    value={userDetails.country}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUserDetails({
                        ...userDetails,
                        country: e.target.value,
                      });
                    }}
                  />
                  {errors?.country && (
                    // if errors then display alert
                    <Alert variant="danger">{<p>{errors.country}</p>}</Alert>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <ul className="checkinfo">
                  {/* <li>
                    <input
                      type="checkbox"
                      id="citizen"
                      name="citizen"
                      value="terms"
                      required={true}
                      onChange={(e) => {
                        setCheck({ ...checkbox, checkbox1: e.target.checked });
                      }}
                    />
                    <label htmlFor="citizen"> I am not a US citizen</label>
                  </li> */}
                  <li>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value="terms"
                      required={true}
                      onChange={(e) => {
                        setCheck({ ...checkbox, checkbox2: e.target.checked });
                      }}
                    />
                    <label htmlFor="terms">
                      {' '}
                      I accept <Link href={'/'}>Terms and conditions</Link>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="col-md-12">
                <button
                  className="submitBtn"
                  onClick={async () => {
                    await createUserHandler();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
