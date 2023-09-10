import React from 'react';
import './body2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './bg.mp4'

 function Body2() {
  return (
    <div className="container">
      <div className="blur-background">
        <video src={bg} autoPlay loop muted className="video-background" />
      </div>
      <div className="content">
        <heading>Money ADVISER:</heading>
        <text>
        The Money Advisor project is a financial advisory tool designed to assist users in making informed decisions <br/>
        about how to invest their money. This application helps users analyze their investment options and provides<br/>
        personalized investment recommendations based on their financial goals, risk tolerance, and available funds.<br/>

        Key Features:<br/>

User Registration and Profile Creation:<br/>

Users can create accounts and set up their profiles, providing essential information such as age, income, and financial goals.
User profiles are used to customize investment recommendations.
Investment Amount Input:<br/>

1. Users input the amount of money they want to invest. This can be a lump sum or a regular contribution.
Risk Assessment:<br/>

2.The application assesses the user's risk tolerance through a series of questions or a questionnaire.
Based on the user's risk profile, the system categorizes them as conservative, moderate, or aggressive investors.
Investment Analysis:<br/>

3.Money Advisor analyzes various investment options, such as stocks, bonds, mutual funds, real estate, and more.
The system considers historical performance, risk factors, and market conditions to provide insights into each investment option.
Customized Investment Suggestions:<br/>

4.Using the user's risk profile, investment amount, and financial goals, the system generates personalized investment recommendations.
These suggestions include specific investment vehicles, allocation percentages, and timeframes.
Investment Portfolio Simulation:<br/>

5.Users can simulate their potential returns and portfolio growth based on the recommended investments.
The application provides visual representations and charts to illustrate the projected outcomes.
Educational Resources:<br/>

6.Money Advisor offers educational articles, videos, and resources to help users understand different investment strategies and concepts.
Performance Tracking:<br/>

7.Users can track the performance of their investments over time.
The system provides regular updates and alerts on portfolio performance.
Security and Privacy:<br/>

8.The application ensures the security and privacy of user data, implementing encryption and secure authentication methods.
Mobile-Friendly:<br/>

9.Money Advisor is accessible on both desktop and mobile devices, allowing users to manage their investments on the go.
Customer Support:<br/>

10.Users can contact customer support for assistance, clarifications, or inquiries about their investment decisions.
Notifications:<br/>

The application sends notifications about important financial events, market trends, and investment opportunities.
Money Advisor aims to empower users to make well-informed investment decisions, tailored to their financial circumstances and goals. It serves as a valuable tool for individuals seeking to grow their wealth through smart investing while minimizing risks.

        </text>
      </div>
    </div>
  );
}

export default Body2;



