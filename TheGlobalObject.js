// Global object in node called Global

// it has some methods like the window object like console, setinterval,settimeout

// methods for accessing the file which i'm in
console.log(__filename); // absolute path of current file
console.log(__dirname)  // directory name where this js is located

// class AbortController

// utility class used to signal cancelation in selected promise-based apis, the api is based on the web api abort controller, return an abortsignal instance object and has a method called abort()

const ac = new AbortController()

ac.signal.addEventListener('abort',function(){
    console.log("Aborted")
},{once:true})

ac.abort(ac)