# LOTR-or-Potter-Quiz

## Description 
LOTR (pronounced /'lɒtər/) or Potter is a quiz based on the series **Lord of the Rings** (LOTR) and **Harry Potter** (Potter).

## Table of Contents

* [Technology Usage](#usage)
* [Acceptance Criteria](#criteria)
* [User Story](#story)
* [Instructions](#Instructions)
* [Credits](#credits)
* [License](#license)

## Usage

The application makes use of the following technologies:

1.  ### HTML 5
    It is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwirsJnF_IjuAhUFheYKHXzxC_oQFjAKegQIAhAC&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTML5&usg=AOvVaw1Pc1Tzxi9h86QKDBa0Ofro)_

2.  ### JavaScript 6
     Is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. The standard for JavaScript is ECMAScript. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6.  _[ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript)_

3.  ### CSS
    CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects._[ref](https://medium.com/html-all-the-things/what-is-a-css-framework-f758ef0b1a11)_

    We also made use of CSS framework called MaterializeCSS. CSS Frameworks are collection or libraries of CSS stylesheets that are prepped and ready to use. It simplifies coding to make layout and elements look beautiful. More details on MaterializeCSS can be found on their website **[here](https://materializecss.com)**. 

4.  ### API's
    API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.
    We made use of 2 Web Based  API's 
    a.  *_The One API_*
        We used this one to generate questions for Lord of the Ring. _[ref](https://the-one-api.dev)_

    b.  *_HP-API_*
        This is the Harry Potter API we used. _[ref](https://hp-api.herokuapp.com)_

5.  ### Visual Studio Code
    Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. _[ref](https://en.wikipedia.org/wiki/Visual_Studio_Code)_

    In conjuntion with GitHub we made use of the following plugins:
     
     a. *_GitLens_*
     It is an open-source extension for Visual Studio Code created, developed, and maintained by Eric Amodio. GitLens simply helps you better understand code; Quickly glimpse into whom, why, and when a line or code block was changed; Jump back through history to gain further insights as to how and why the code evolved. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiP-PSeh4nuAhVH73MBHcTWAT8QFjAHegQIBxAC&url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Deamodio.gitlens&usg=AOvVaw0RHvZ8fzEvI-Efg2Cw6fxU)_

     b. *_Emmet_*
     Emmet is a toolkit for high-speed HTML, XML, XSL (or any other structured code format) coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi16o_Dh4nuAhWK7HMBHXdEBCcQFjABegQICBAC&url=https%3A%2F%2Fgithub.com%2Femmetio%2Femmet-eclipse&usg=AOvVaw3kWt3hMlR-KF3B5nqVBAUX)_

6.   ### GitHub
     GitHub is a code hosting platform for version control and collaboration. It lets developers work together on projects from anywhere and allows you to create repositories and branches perform commits, Pull Requests. _[ref](https://guides.github.com/activities/hello-world/)_


## Criteria
GIVEN I am feeling like taking a quiz challenge
WHEN when I open the page
THEN a start button is displayed to start a quiz
WHEN push the start button
THEN a quiz is starting which contains harry potter and lord of the rings characters
WHEN I push the lord of the rings or harry potter button
THEN my answer needs to be correct to increase my score
WHEN I get through my 10 questions or the timer is exceeded
THEN I get my final result
WHEN I enter my initials and submit
THEN my score gets saved for me even if I refresh the page
WHEN I have submited my score
THEN my score gets displayed on a highscore page

## Story
AS A Lord of the rings or Harry Potter fan
I WANT to test my knowledge on my favorite books
SO THAT I can try to reach the highest score

## Instructions

This is a Quiz format challenge. How well you do is based on if you can finish the questions in time and how many questions you get correct.

The game begins by clicking on the START button. 

For each correct answer your score increases. 

There is also a multiplier applied to your score. 

Everytime you get a correct answer the multiplier grows by +1. 

However, everytime you get an incorrect answer the multiplier resets to 2 and no score is added. 

The game ends when the timer is up or when all questions have been answered. There is ample time though.

At the end of the game your score will be displayed and you will be asked to enter your name to record your score.

Once you click SUBMIT you will be directed to the *_Record of Scores_* to compare your performance against previous attemts or other players on your system.

You will also have the option to try again or to clear the Record of Scores.

There are also 2 other pages containing information on the subjects of the 2 APIs we are using ie. Harry Potter and Lord of the Rings.

## Some Screenshots Mobile

1. ### Index Page 
  * ![Index Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20INDEX.png?raw=true)
2. ### Quiz Page 
  * ![Quiz Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20QUIZ.png?raw=true)
3. ### Submit Page  
  * ![Submit Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20SUBMIT.png?raw=true)
4. ### High Score Page 
  * ![High Score Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20HIGH%20SCORES.png?raw=true)
5. ### Harry Potter Page 
  * ![Harry Potter Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20HARRY%20POTTER.png?raw=true)
6. ### Lord Of The Rings Page 
  * ![Lord Of The Rings Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20LOTR.png?raw=true)

## Some Screenshots Desktop

1. ### Index Page 
  * ![Index Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/DT%20INDEX.png?raw=true)
2. ### Quiz Page 
  * ![Quiz Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/DT%20QUIZ.png?raw=true)
3. ### Submit Page  
  * ![Submit Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/DT%20SUBMIT.png?raw=true)
4. ### High Score Page 
  * ![High Score Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/DT%20HIGH%20SCORES.png?raw=true)
5. ### Harry Potter Page 
  * ![Harry Potter Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/DT%20HARRY%20POTTER.png?raw=true)
6. ### Lord Of The Rings Page 
  * ![Lord Of The Rings Page](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/DT%20LOTR.png?raw=true)

## Credits
:bellhop_bell: 
Developed by WANDaRING

Contact | Mobile | E-mail
------------ | ------------- | ------------
Nadja | 555-000-1001 | nadja@wandering
------------ | ------------- | ------------
Marco | 555-000-1002 | marco@wandering
------------ | ------------- | ------------
Adrian | 555-000-1003 | adrian@wandering
------------ | ------------- | ------------
Abbie | 555-000-1004 | abbie@wandering

## License
Use for fun permitted. Don't use to educate. Don't claim as your own.