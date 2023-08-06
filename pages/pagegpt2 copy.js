


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Input } from 'antd';
import Link from 'next/link';
import Head from "next/head";
import { useForm } from "react-hook-form";


export default function pg2() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [screenshotURL, setScreenshotURL] = useState(null);

  async function onSubmit({forminput1}) {
    try {
      setIsFetching(true);
  
      const response = await fetch("/api/gpt22", {
        method: "POST",
        body: JSON.stringify({prompt1: forminput1}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data1 = await response.json();
      setResult(data1.result);
      setIsHidden(false);
      setValue("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    async function fetchScreenshot() {
      try {
        setIsFetching(true);
        const response = await fetch('/api/puppeteergpt4', {
          headers: {
            Accept: 'image/png'
          }
        });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setScreenshotURL(url);
      } catch (error) {
        console.error(error);
        alert(error.message);
      } finally {
        setIsFetching(false);
      }
    }
    if (result && !isFetching && !screenshotURL) {
      fetchScreenshot();
    }
  }, [result, isFetching, screenshotURL]);

  return (
    <div className="text-white bg-black bg-cover h-screen items-center justify-center flex">
      <div className="z-10 mt-[-36rem] ml-[-35rem] text-7xl font-bold absolute">
        GPT Generated Disciplinary Meeting Invitation & PDF & Send
      </div>

      {isHidden && (
        <div className="z-10 mt-[-15rem] ml-[-65rem] text-2xl absolute">
          Arrange a disciplinary meeting with- Enter email:
        </div>
      )}

      {isHidden && (
        <div className="text-black mt-[-15rem] ml-[-5rem] absolute">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-[20rem]"
              type="text"
              name="forminput1"
              placeholder=""
              {...register("forminput1", { required: true })}
            />
            <input type="submit" value="" />
          </form>
        </div>
      )}

      {!isHidden && (
        <div className="text-white mt-[-10rem] ml-[-40rem] w-[30rem] absolute z-10">
          {result}
        </div>
      )}

      {screenshotURL && (
        <div className="mt-[50rem] ml-[60rem] mb-[45rem] transform scale-90 absolute">
          <img src={screenshotURL} />
        </div>
      )}
    </div>
  );
}


