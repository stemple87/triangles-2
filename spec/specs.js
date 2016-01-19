/*
NEEDS TO NOT EQUAL A TRIANGLE --
NEEDS TO HAVE 2 EQUAL SIDES
NEEDS TO HAVE NO EQUAL SIDES
NEEDS TO HAVE ALL EQUAL SIDES
*/

describe('triangle', function(){
  it('it does not equal a triangle', function(){
    expect(triangle(1,1,3)).to.equal(true);
  });
  it('it has two equal sides', function(){
    expect(triangle(2,2,3)).to.equal(true);
  });
  it('it has no equal sides', function(){
    expect(triangle(30, 40, 50)).to.equal(true);
  });
  it('it has all equal sides', function(){
    expect(triangle(3,3,3)).to.equal(true);
  });
});
