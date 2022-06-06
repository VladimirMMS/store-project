
export function getAge(date:string) {
    // const some = action.payload.rows[1].age;
      var today = new Date();
      const birthday = new Date(date);
      var age = today.getFullYear() - birthday.getFullYear();
      const month = today.getMonth() - birthday.getMonth();
      const day = today.getDay() - birthday.getDay();
      if(month < 0 || month === 0 && day < 0) {
        age--
      }
      return age
    
}