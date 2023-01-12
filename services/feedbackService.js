



// class
class FeedbackService {
    // params @params {*} datafile
    constructor(datafiles) {
        this.datafiles = datafiles
    }

    addFeedback(feedback) {
        this.feedback.push(feedback);
    }

    getFeedback() {
        return this.feedback;
    }
}