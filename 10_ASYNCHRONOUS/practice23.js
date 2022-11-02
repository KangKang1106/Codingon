function call(name) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hell() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve('callback hell');
    }, 1000);
  });
}

call('kim')
  .then(function(name) {
    console.log(name+' 반가워');
    return back();
  })
  .then(function(name) {
    console.log(name+' 을 실행했구나');
    return hell();
  })
  .then(function(name) {
    console.log('여기는 '+name);
  });