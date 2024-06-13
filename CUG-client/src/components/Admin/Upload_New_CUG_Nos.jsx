/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'

function Upload_New_CUG_Nos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <div style={{display:'flex', justifyContent: 'center',alignItems: 'center',flexDirection:'column', maxWidth:'250px', height: '100vh', margin: 'auto'}}>
      <div style={{background: '#f0f0f0', padding: '20px', borderRadius: '8px', maxWidth: '400px', width: '100%'}}>
        <div style={{marginBottom: '10px', textAlign: 'center'}}>Upload_New_CUG_Nos</div>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <div style={{marginBottom: '20px', marginTop: '10px'}}>
            <input placeholder = "CUG NO" {...register("CUGNO", { required: true, minLength:{value:4,message:"length must be 4"}, maxLength:{value:8,message:"length greater than 8"}})} type="text"/>  
            {errors.CUGNO && <div style={{color: 'red'}}>{errors.CUGNO.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "EMP NO" {...register("EMPNO", { required: true, minLength:{value:5, message:"length must be 5"}, maxLength:{value:10, message:"length greater than 10"}})} type="text"/>
            {errors.EMPNO && <div style={{color: 'red'}}>{errors.EMPNO.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "NAME" {...register("NAME", { required: true, maxLength:{value:20, message:"length greater than 20"}})} type="text"/>
            {errors.NAME && <div style={{color: 'red'}}>{errors.NAME.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "DESIGNATION" {...register("DESIGNATION", { required: true, minLength:{value:5, message:"length must be 5"}, maxLength:{value:15, message:"length greater than 15"}})} type="text"/>
            {errors.DESIGNATION && <div style={{color: 'red'}}>{errors.DESIGNATION.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "DIVISION" {...register("DIVISION", { required: true, minLength:{value:7, message:"length must be 7"}, maxLength:{value:15, message:"length greater than 15"}})} type="text"/>
            {errors.DIVISION && <div style={{color: 'red'}}>{errors.DIVISION.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "DEPARTMENT" {...register("DEPARTMENT", { required: true, minLength:{value:5, message:"length must be 5"}, maxLength:{value:15, message:"length greater than 15"}})} type="text"/>
            {errors.DEPARTMENT && <div style={{color: 'red'}}>{errors.DEPARTMENT.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "BILL UNIT" {...register("BILLUNIT", { required: true, minLength:{value:3, message:"length must be 3"}, maxLength:{value:10, message:"length greater than 10"}})} type="text"/>
            {errors.BILLUNIT && <div style={{color: 'red'}}>{errors.BILLUNIT.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "ALLOCATION" {...register("ALLOCATION", { required: true, minLength:{value:3, message:"length must be 3"}, maxLength:{value:10, message:"length greater than 10"}})} type="text"/>
            {errors.ALLOCATION && <div style={{color: 'red'}}>{errors.ALLOCATION.message}</div>}
          </div>
          <div style={{marginBottom: '10px'}}>
            <input placeholder = "PLAN" {...register("PLAN", { required: true, minLength:{value:20, message:"length must be 1"}})} type="text"/>
            {errors.PLAN && <div style={{color: 'red'}}>{errors.PLAN.message}</div>}
          </div>
          <button type="submit" style={{backgroundColor: '#007bff', padding: '8px 16px', cursor: 'pointer', borderRadius: '8px',color: 'white', border: 'none', width: '100px'}}>Activate</button>
        </form>
      </div>
    </div>
  );
}
export default Upload_New_CUG_Nos

