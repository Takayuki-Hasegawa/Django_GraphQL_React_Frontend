import React, { createContext, useState } from "react";
export StateContext = createContext();

const StateContextProvider = (props) => {
    const [name, setName] = useState("");
    const [joinYear, setJoinYear] = useState(2020);
    const [deptName, setDeptName] = useState("")
    const [selectedDept, setSelectedDept] = useState("")
}