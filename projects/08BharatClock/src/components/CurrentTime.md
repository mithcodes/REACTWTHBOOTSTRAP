import { useEffect,useState } from "react";
useState
What is it?

useState is like a magic box in your component. It's where you keep things you want to remember.
How does it work?

Imagine you have a box called toy and it starts with a teddy bear inside.
When you open the box, you see the teddy bear (toy).
You also get a magic wand called setToy that you can use to change what's inside the box.
Uses:

You can use useState to keep track of:
Input values in a form.
Whether a button is clicked or not.
Anything you want to remember in your component.
useEffect
What is it?

useEffect is like a special task list for your component. It's where you put extra things you want to do.
How does it work?

After your component is finished showing everything (painting), it checks the useEffect list.
If there's something in the list, it does it.
You can tell it to do something once (like fetch data) or every time something changes (like a state variable).
Uses:

You can use useEffect to:
Fetch data from an API after the component is shown.
Update the title of the page.
Do something every time a specific variable changes.
Summary
useState is like a magic box where you keep things.
useEffect is like a special task list where you put things you want to do after your component is shown.
Together, they make your components more powerful and flexible!

useEffect(() => {
  // This is where you put the extra thing you want React to do.
  // For example, fetching data from an API.
}, []);



const CurrentTime=()=>{
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        console.log("interval has been setup")
        const intervalId=setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearInterval(intervalId)
        }
    },[])
useState(new Date()) means "create a new state variable called time and put the current date and time inside it".
return () => { clearInterval(intervalId) } means "when the component is done showing, stop the interval".
This is important because we don't want the interval to keep running when the component is not on the screen.
It's like turning off the lights when you leave a room to save electricity.
Together, useEffect and the clean-up function help keep your component tidy and efficient. They make sure that everything is set up when needed and cleaned up when not needed.
When you provide a dependency array [], React will run the effect after the first render and then never again.
This is useful for tasks that only need to be done once, such as setting up an interval or fetching data from an API.

The {time.toLocaleDateString()} and {time.toLocaleTimeString()} expressions are used to display the current date and time in a human-readable format.
The toLocaleDateString() method returns the date portion of the time state variable in a format appropriate for the locale.
The toLocaleTimeString() method returns the time portion of the time state variable in a format appropriate for the locale.
The className="lead" attribute sets the class name of the paragraph element to "lead", which can be used for styling purposes.






