# The Task

1. Form needs to handle ALL fields ✅
2. You can simply save the updated fields to an object and `console.log` the object when click the save button ✅
3. (Optional) Ability to cancel my edits and revert back to the initial data ✅

## How I went about completing the task:

This was my first attempt at using Shopify (I never knew Shopify also was a SaaS platform).
I thought I would have to do a lot more digging into the docs, but
thankfully the Polaris components use react under the hood which I was comfortable with.

I first went on creating a general form using Polaris components (components - user - UserForm).
I needed to see how the Polaris Form/TextField components differed from regular React controlled forms.
Couple things I noticed:

- onChange handler for Polaris TextField component does not support event.target
  - I couldn't do my normal onChange={({target}) => setState(target.value)} on the TextField
    (correct me if I'm wrong, but I kept getting undefined errors)
    (I was also considering trying to use event.keyCode for handling inputs)
- The docs all used the useCallBack hook, but I don't think that was necessary
  - no props are being sent (no need to worry about over re-rendering with one form)
  - I don't think defining functions are costly to effect performance (things I read)

After trial/error, I was able to make a form just like any other react application,
with some tiny error handling using error property on each TextField as well as an overall error message.

## State Management

I was originally going to go with Redux to manage state, but I remembered my brother telling me: 'don't overkill if you don't need to'.
I went with useContext over the basic useState hook to manage my state since:

- If this were to be a real Form api/component for an app, from my experience, the User details should be global state
- I have a habit of trying to avoid props.
- it helps to separate UI logic from the business logic

## Handling User Detail Information Change

To try and get the full effect of a User Detail component, I went an saved the User details into localStorage.

- used localStorage since I want the user to be logged in (still have their data) even when they close the tab
  - This would give the effect of the app having the user log out only when they click log out button (or other triggers to clear storage)
- had experience in a similar way to handle User details when doing auth from an actual database

### First Name + Last Name + Birthday input feature

I added in a simple regex for First name / Last name / Birthday TextFields to make the UX a bit more easier for users.

- For the names, users don't have to capitalize the first, it will automatically do it
- For the birthday, users don't have to type in the hyphens, it will automatically do it when they enter their 8 digits

## Other static UI Features

I added in the top search bar and the leftside navigation to make it at least look more appealing.
I wanted to change the logo images (index.js - AppProvider's ContextualSaveBarSource / topBarSource),
but I wasn't sure how to change the dimensions to make it fit. I went with the one found in the Polaris docs.
The search doesn't do anything as you can see it in the console (just logs out something)

### What I would change

I think I would change the address to make it to its own object inside the user object.
Although it would create more inputs (maybe less friendly for users):

- We would be able to search users per city, if needed
- It would be easier to handle user input properly
- I was looking around for Date Picker for birthday (being able to choose years), but it seems like Polaris is yet to have it(?)
  - current solution is to use regex to only allow integers + adding hyphens
  - maybe utilize another small DatePicker library(?)

## Overall

I enjoyed this task because I never used Shopify / Polaris before,
and I got to practice using React which I always love to do.
I think I will keep continuing to learn about Shopify and potentially create my own small project.
There is still a lot for me to learn (both Shopify and react), especially the layout components for Polaris.
Thank you for taking the time to read and go through my small Form component.


# To start:

- [npm]
- npm install to install all dependencies

## development
Run the local `create-react-app` development server with Polaris preconfigured.

````

**With npm**

```bash
npm start
````

Open **http://localhost:3000** in your browser and you should see the Polaris example application.

