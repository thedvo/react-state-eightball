# Eight Ball

A simulation of a classic kid’s toy, the [Magic Eight Ball](https://en.wikipedia.org/wiki/Magic_8-Ball).

## Requirements

This should appear as a black ball that initially reads “Think of a Question”, like this:

[<img src="images/black.png" width="150"/>](images/black.png)

When you click on the ball, it should choose a random answer & the matching color for that answer. For example, after clicking, it might look like this:

[<img src="images/green.png" width="150"/>](images/green.png)

## Step One: EightBall Component

This application will consist of two components:

### _App_

- A simple component that just renders an _**EightBall**_

### _EightBall_

- The component for the magic eight ball.
  The _**EightBall**_ should take a single property, answers, which should be an array of objects, with each object having a key for msg and color. For example, to use the answers from the classic commercial product, you could use these:

```
[
{ msg: "It is certain.", color: "green" },
{ msg: "It is decidedly so.", color: "green" },
{ msg: "Without a doubt.", color: "green" },
{ msg: "Yes - definitely.", color: "green" },
{ msg: "You may rely on it.", color: "green" },
{ msg: "As I see it, yes.", color: "green" },
{ msg: "Most likely.", color: "green" },
{ msg: "Outlook good.", color: "green" },
{ msg: "Yes.", color: "green" },
{ msg: "Signs point to yes.", color: "goldenrod" },
{ msg: "Reply hazy, try again.", color: "goldenrod" },
{ msg: "Ask again later.", color: "goldenrod" },
{ msg: "Better not tell you now.", color: "goldenrod" },
{ msg: "Cannot predict now.", color: "goldenrod" },
{ msg: "Concentrate and ask again.", color: "goldenrod" },
{ msg: "Don't count on it.", color: "red" },
{ msg: "My reply is no.", color: "red" },
{ msg: "My sources say no.", color: "red" },
{ msg: "Outlook not so good.", color: "red" },
{ msg: "Very doubtful.", color: "red" },
]
```

The _**EightBall**_ will need state to keep track of the current color and message text, and this state should initially be “black” and “Think of a Question”.

Make it so that the ball chooses a random message when it is clicked on. This should change the background color of the ball and the message.

## Further Study 1

### Reset

Add a button below the ball that will reset the ball back to its initial state.
