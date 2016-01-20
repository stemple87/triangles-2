/*
NEEDS TO NOT EQUAL A TRIANGLE --
NEEDS TO HAVE 2 EQUAL SIDES
NEEDS TO HAVE NO EQUAL SIDES
NEEDS TO HAVE ALL EQUAL SIDES
*/

describe('triangle', function(){
  it('it does not equal a triangle', function(){
    expect(triangle(3,3,10)).to.equal("These sides do not a triangle make");
  });
  it('it has two equal sides', function(){
    expect(triangle(4,4,8)).to.equal("isosceles");
  });
  it('it has no equal sides', function(){
    expect(triangle(3, 2, 1)).to.equal("scalene");
  });
  it('it has all equal sides', function(){
    expect(triangle(3,3,3)).to.equal("equalateral");
  });
});
