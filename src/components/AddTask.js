const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task'></input>
      </div>
      <div className='form-control'>
        <label>Due Date</label>
        <input type='text' placeholder='Add Due Date'></input>
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type='checkbox' placeholder='Set Reminder'></input>
      </div>
      <input 
        type='submit' 
        value='Save Task' 
        className='btn btn-block'></input>
    </form>
  )
}

export default AddTask
