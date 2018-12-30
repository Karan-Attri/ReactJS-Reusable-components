import React, { Component } from 'react';
import './FeedbackForm.css'
const FeedbackForm = () => {
    return (
        <div id="main">
            <form>
                <h1> Feedback</h1>
                <div>
                    <div>Thank you for taking the time to fill in our feedback form. By providing us your feedback,
                you are helping us understand what we do well and what improvements we need to implement</div>
                    <div className="form-group">
                        <label htmlFor="summary"> Summary </label>
                        <input type="text" className="form-control" id="summary" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments"> Comments </label>
                        <input type="text" className="form-control" id="comments" />
                    </div>
                    <div>The information given to the feedback form will be used for service improvement only and are strictly confidential</div>
                </div>
                <div>
                    <button className="btn btn-primary" id="send">
                        Send
                </button>
                    <button id="cancel">
                        Cancel
                </button>
                </div>
            </form>
        </div>
    )
}
export default FeedbackForm;