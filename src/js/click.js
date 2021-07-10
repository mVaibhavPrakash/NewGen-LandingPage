const click = (e, toogle, setToggle) => {
  e.preventDefault();
  console.log('clicked');
  if (toggle === '') {
    setToggle('Active');
  } else {
    setToggle('');
  }
};

export default click;
