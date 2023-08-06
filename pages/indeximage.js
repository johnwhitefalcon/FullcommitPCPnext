
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Input } from 'antd';
import { useForm } from "react-hook-form";
import jcpic from '../public/jcpic.jpg'


export default function web(){


return (

<div className="">



<Image layout="fill" src={jcpic} className="bg-center bg-cover h-screen bg-fixed justify-center items-center flex">



</Image>

<div className="p-5 text-white z-10 text-5xl font-bold w-40 font-sans ml-[100px] mt-[300px]">

       Performance and Potential Profile
</div>

<div className="flex float-right mr-[200px]">
<input className="w-[400px]">
</input>
</div>




</div>



)


}


