### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
Python is better suited for data science, while JavaScript is better suited for web development.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
Using the get() method and the setDefault() method.

- What is a unit test?
Testing the smallest testable parts of an app.

- What is an integration test?
Testing of multiple components of an app to check that they work together.

- What is the role of web application framework, like Flask?
To make web development less time intensive and less complicated.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
Route URL option is better for a page containing information about the parameter. URL query param is great for a search setup.

- How do you collect data from a URL placeholder parameter using Flask?
flask.request.args.get()

- How do you collect data from the query string using Flask?
flask.request.args.get('param')

- How do you collect data from the body of the request using Flask?
flask.request.form('param')

- What is a cookie and what kinds of things are they commonly used for?
Cookies store small bits information in the browser. They are used to save states.

- What is the session object in Flask?
Flask session object is used to track the session data which is a dictionary object that contains a key-value pair of the session variables and their associated values. 

- What does Flask's `jsonify()` do?
A helper method to properly return JSON data.