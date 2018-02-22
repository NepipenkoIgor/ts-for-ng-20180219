Object.defineProperty(
  window,
  "MySweetApp",
  {
    value: "v1.0.0",
    writable: false,
  });

function deliveryMethod() {
  // TODO
  return "overnight";
}

function shipWeight() {
  const el = document.getElementById("weight");
  const num = el && el.innerHTML;
  if (!num) {
    return 0;
  }
  return parseInt(num, 10);
}

/**
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr: string | string []) {
  function sendEmail(addr: any) {
    // Default to standard delivery if empty
    console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);

    if (shipWeight() > 100) {
      console.log("WARNING: Oversize package");
    }
  }

  // If it's an array, loop over it
  if (Array.isArray(emailAddr)) {
    emailAddr.forEach((val, idx) => {
      sendEmail(val.trim());
    });
  } else {
    sendEmail(emailAddr.trim());
  }
}
