
import React, { useState, useEffect } from 'react';

export async function gpt2result(prompt1) {
    const response = await fetch("/api/gpt22", {
        method: "POST",
        body: JSON.stringify({prompt1: forminput1}),
        headers: {
          "Content-Type": "application/json",
        },
      });




    const data1 = await response.json();
    return data1.result;
  }

