## Chatting with Carl Rogers

Carl Rogers is the founding father of person-centered therapy in counseling psychology. In this toy project, I built a basic retrival-based chatbot that responds to a user in a way that Rogers would talk to his clients.

### Motivation
Can a chatbot talk like Carl Rogers? His work is most prevalently characterized with "[reflective listening](https://en.wikipedia.org/wiki/Reflective_listening)," to bring out the full potential of self-actualizing tendency of his clients. It is also a way to deliver the core values of person-centered therapy: Congruence, unconditional positive regard, and accurate empathy [1]. 

As one of the earlist chatbots, Joseph Weizenbaum's [ELIZA](https://dl.acm.org/doi/10.1145/365153.365168) is known to take after the way a Rogerian psychologist would talk, also a form of reflective listening. A simple substitution of keywords and reassembly of responses worked to carry on with a simple conversation with a user [2]. In this work, I tried ways in which a chatbot may talk like Rogers.

### Carl Rogers Transcripts
I obtained the Carl Rogers transcript collection by the courtesy of the Person-Centered Association in England. With this data, one can build a chatbot by having it retrieve most likely responses to a given input, or having it generate from bottom up. As the generative model still has a far more way to go, I built a simple retrieval-based chatbot.

### Design
* Python
.. * I referred to a [Medium](https://medium.com/analytics-vidhya/building-a-simple-chatbot-in-python-using-nltk-7c8c8215ac6e) article to build a simple chatbot and prepared a pool of chatbot responses from therapist utterances in the transcript data. The chatbot simply asks the user to describe an event that caused a significant emotional setback and asks the user to reflect on it by relating it to close relationships and course of life. Of course the chatbot does not understand anything about the context so its responses often break the flow. I find that a question is a powerful tool to define and lead a conversation [3].
* Javascript
.. * A simple implementation of the same chatbot above, built in [Javascript](https://jsfiddle.net/spark7356/7um30ek6/132/). Here the bot only responds in the pool of designated pre-defined answers. 

### Acknowledgement
* Data: Courtesy of [The Person-Centered Association](https://www.the-pca.org.uk/directory/local-groups/pca-yorks.html)
* Chatbot: Parul Pandey's [Medium](https://medium.com/analytics-vidhya/building-a-simple-chatbot-in-python-using-nltk-7c8c8215ac6e) article  

### Works Cited
[1] Rogers, C. R. (1992). [The necessary and sufficient conditions of therapeutic personality change](https://app.shoreline.edu/dchris/psych236/Documents/Rogers.pdf). Journal of consulting and clinical psychology, 60(6), 827. <br>
[2] Weizenbaum, J. (1966). [ELIZA—a computer program for the study of natural language communication between man and machine](https://dl.acm.org/doi/pdf/10.1145/365153.365168?casa_token=jUnYmfN8_7cAAAAA:s7E3nAx64YO59KjnXGkJB8Pk9l-518yJjBH4JZDv8Xbc0n2JWPDmZz3g58ux2x21wu_bkDDwSUDBug). Communications of the ACM, 9(1), 36-45.<br>
[3] Sacks, H., Schegloff, E. A., & Jefferson, G. (1978). [A simplest systematics for the organization of turn taking for conversation](https://www.sciencedirect.com/science/article/pii/B9780126235500500082). In Studies in the organization of conversational interaction (pp. 7-55). Academic Press.