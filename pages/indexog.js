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

<div className="w-[400px] ml-[25rem] mt-[-25rem] z-20">

<form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-[25rem]">
<div>
<label className="p-2 text-white ml-[-0.5rem]">Q1: Did you find specific activities easy as a child</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q2: Did you love doing these activities when you were younger</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q3: Did you experience traumatic events as a child-teen</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q4: Would you say you are obsessive about one thing</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q5: Did you practice over and over again during your teens-20's</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q6: Did you deliberately move home to pursue your talents as a teen-20's</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q7: Have you often lived/worked in a team atmosphere</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q8: Do people think you are an independent thinker that doesnt quite fit in</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q9: Are you trying to change the world</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

<div>
<label className="p-2 text-white ml-[-0.5rem]">Q10: Are you a tinkerer/carefully looking at how things work and why</label>
<input type="text" name="name" className="w-[400px]" {...register("name")}/>
</div>

</form>  


</div>


</div>



)


}