let promise = new Promise((resolve, reject) =>{
    console.log("I am a promise");
    resolve("Success");
    //reject("Rejected");
})

//promise has three state pending, fullfilled and rejected

function getData(dataID, getNextData){

    return new Promise((resolve, reject) =>{
          setTimeout(() =>{
        console.log("Data", dataID);
        resolve("success")
        if(getNextData){
            getNextData();
        }
    }, 2000);

    });

  //-------------------------------------
  const getPromise = () =>{
    return new Promise((resolve, reject) =>{
        console.log(" I am a promise");
        resolve("Sucess");
    });
  };

  let promise = getPromise();
  promise.then((res) =>{
    console.log("Promise fullfilled", res);
  });

  promise.catch((err) =>{
    console.log("Rejected", err);
  })

  //------------------------------------

}