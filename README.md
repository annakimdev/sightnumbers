# Sight Numbers
Sight Numbers is an educational website for multi-lingual Preschoolders to learn numbers by sight and sound. Numbers can be heard in English and a different language of choice.

Inspired by [Sight Words app](https://blog.barbaralaw.me/creating-a-quick-web-app-and-iteratively-improving-it) @BlawblawLaw.

**Link to project:** https://sightnumbers.netlify.app/

![alt tag](https://i.ibb.co/5kdZqmp/sight-numbers-home-v3.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Math.Random() method is used to choose and display a number from a list of common numbers for preschoolers. [Web Speech API](https://wicg.github.io/speech-api/) was utilized to generate sound of the numbers. Languages available in the user's browser are listed for selection.

## Optimizations

Backend with authentication to be built to allow parents to login and create a custom list of numbers for their children. The buttons can be deactivated for few seconds after each click in order to allow speech output to finish reading the number. Also, the language selection list can be improved to open downward instead of upward.

## Lessons Learned:

At first, Korean was hard coded as an alternative language for my child. However, Korean only worked on Chrome browser , which I was testing with. It was a different language on Safari. To address this issue, all the available languages in the user's browser is listed for selection. Giving the choice to the user was a huge improvement on usability.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Peniel Skincare:** https://github.com/...

**KH Salon:** https://github.com/...

**Artist Portfolio:** https://github.com/...