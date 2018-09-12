module.exports = async function(context, req) {
  context.log("The hello function has been triggered!");

  context.res = {
    // status: 200, /* Defaults to 200 */
    body:
      "Welcome to this super simple function!"
  };
};
