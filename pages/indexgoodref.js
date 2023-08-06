
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { useForm } from "react-hook-form";
import Link from 'next/link';



export default function web(){

       const { register, handleSubmit } = useForm();
       const onSubmit = async function(data){
       const response = await fetch("./api/mongapi", {
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify({data})
         })
         const resdata = await response.json();

       }
    

return (


<div className="bg-center bg-cover h-screen custom-img bg-fixed justify-center items-center flex" >

<div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-0"/>

<div className="p-5 text-white z-10 text-5xl font-bold w-[35rem] font-sans ml-[0rem] mt-[-30rem]">
       <Link href="/page2"><div>Performance-Potential Profile</div></Link>
</div>

<div className="w-[400px] ml-[25rem] mt-[-25rem] z-20 space-y-2 mt-[25rem]">

<div>
<form className="">
<label className="p-2 text-white ml-[-0.5rem]">Q1: Did you find specific activities easy as a child</label>
<select className="w-[400px]" {...register("Q1")}>
       <option value="1">Yes</option>
        <option value="0">No</option>
      </select>


<input type="number" className="w-[400px]" {...register("name")}/>
<input type="text" className="w-[400px]" {...register("lastname")}/>

<select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      
      <input {...register("checkbox")} type="checkbox" value="A" />
      <input {...register("checkbox")} type="checkbox" value="B" />
      <input {...register("checkbox")} type="checkbox" value="C" />


</form>  
<button onClick={handleSubmit(onSubmit)} className="w-[400px] bg-white">Button</button>
</div>




</div>


</div>



)


}

