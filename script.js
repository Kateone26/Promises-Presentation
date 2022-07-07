
let good = false


let madepromise = new Promise((resolve, reject)=>{
    if(!good){
        reject('error')
    }else{
        resolve('good')
    }
})

madepromise.then(result=>{
    console.log(result);
}).catch(err=>{
    console.error(err);
})




//------------------



let p1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'hello')
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'there')
})

let p3 = 1;

// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
// })

Promise.race([p1,p2,p3]).then((result)=>{
    console.log(result);
})


//------------------



let fetchdata = function(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('fetching data complete');
            resolve({id:1,message:'nice work'});
        }, 2000);
    });
};

let parsedata = function(data){
    return new Promise((resolve, reject)=>{
        foo=bar;
        setTimeout(()=>{
            let parsedoutput = `parsed the data for id: ${data.id} with message: ${data.message}`
            resolve({parsed: parsedoutput});
        }, 2000);
    });
};

let echodata = function(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(data.parsed);
        }, 2000);
    });
};


fetchdata().then(parsedata).then(echodata).catch(err=>{
    console.error(err);
})




//------------------


// fetching data:

// https://jsonplaceholder.typicode.com/posts

let root = document.getElementById('root')


const getdata = async()=>{
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        
        root.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
    } catch(err){
        console.log(err);
    }
}
getdata()