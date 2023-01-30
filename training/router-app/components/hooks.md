Custom hooks:

Hook : normal js function
useState,useEffect......

Steps:

1. create a js file - naming:   useFetch (url,options)
2. We can use built-in hooks
3. write the logic
4. return [],{}

      const [projects,setProjects]=useState('')
      url = https://jsonplaceholder.typicode.com/todos
      options={token:'lkfjsdflkjsdfljksdkjf','Content-Type':'application/json'}
      const {loading,error,data=[]}=useFetch(url,options)

5. consume the hook:
TestHook.js
   import useFetch
   const { x,y,z}=useFetch(.......)