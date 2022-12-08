import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";

export default function checkbox() {
  const [on, setOn]= useState(true);

  const change = ()=> {
    setOn(!on);
    return (
      <input type = "checked" checked ={on} on/>
    );
  }
}
