  // test
  // console.log('Mimi Netto w01d05 Homework');

  let money = 0;

  // game inventory
  const items = {
    scissors: 0,
    oldMower: 0,
    newMower: 0,
    students: 0
  }

  // game initialized

  const start = () => {
    alert('Congrats! You are starting a landscaping business!\r\nTimes are tough so all you have to start out with is your teeth.\r\nOnce you get enough money you can upgrade your cutting tools.\r\nStart chopping!');
    money = 0;
    showStatus();
    askForAction();
  }

  const showStatus = () => {
    alert("You have $" + money + "!");
  }

  function checkMoney() {
    if (money < 5) {
      alert('You don\'t have enough money to buy anything.');
      alert('Shop Prices:\r\nRusty Scissors: 5 bucks\r\nOld Lawnmower: 25 bucks\r\nFancy Lawnmower: 250 bucks\r\nTeam of starving students 500 bucks\r\nKeep cutting!');
      askForAction();
    } else {
      checkItems();
    }
  }

  function checkItems() {
    if (items.scissors === 0) {
      items.scissors = 1;
      alert('You bought a pair of rusty scissors!\r\nYou can now earn 5 bucks for each lawn you cut!');
      money -= 5;
      showStatus();
      askForAction();
    } else if (items.oldMower === 0 && money >= 25) {
      items.oldMower = 1;
      alert('You bought a old-timey push lawnmower!\r\nYou can now earn 50 bucks for each lawn you cut!');
      money -= 25;
      showStatus();
      askForAction();
    } else if (items.newMower === 0 && money >= 250) {
      items.newMower = 1;
      alert('You bought a fancy battery-powered lawnmower!\r\nYou can now earn 100 bucks for each lawn you cut!');
      money -= 250;
      showStatus();
      askForAction();
    } else if (items.students === 0 && money >= 500) {
      items.students = 1;
      alert('You hired a team of starving students!\r\nYou can now earn 250 bucks for each lawn you cut!');
      money -= 500;
      showStatus();
      askForAction();
    } else {
      alert('You don\'t have enough for a new item.');
      alert('Shop Prices:\r\nRusty Scissors: 5 bucks\r\nOld Lawnmower: 25 bucks\r\nFancy Lawnmower: 250 bucks\r\n team of students 500 bucks\r\nKeep cutting!');
      askForAction();
    }
  }

  const cutLawn = () => {
    itemsHeld()
  }


  function itemsHeld() {
    if (money == 1000 && items.students >= 1) {
      alert('You win!')
      return;
    } else if (items.students >= 1) {
      money += 250;
      alert('You earned 250 bucks!');
      showStatus();
      askForAction();
    } else if (items.newMower >= 1) {
      money += 100;
      alert('You earned 100 bucks!');
      showStatus();
      askForAction();
    } else if (items.oldMower >= 1) {
      money += 50;
      alert('You earned 50 bucks!');
      showStatus();
      askForAction();
    } else if (items.scissors >= 1) {
      money += 5;
      alert('You earned 5 bucks!');
      showStatus();
      askForAction();
    } else {
      money++;
      alert('You earned a buck!');
      showStatus();
      askForAction();
    }
  }

  const buyItem = () => {
    checkMoney();
    showStatus();
    askForAction();
  }

  const askForAction = () => {
    const choice = prompt("What would you like to do?", "cut / buy / restart");
    if (choice === 'cut') {
      cutLawn();
    } else if (choice === 'buy') {
      buyItem();
    } else if (choice === 'restart') {
      start();
    } else {
      return;
    }
  }

  start();
