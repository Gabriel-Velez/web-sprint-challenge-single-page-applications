describe("Pizza Form", () => {
  beforeEach(() => {
    //each test needs fresh state
    //refresh to reset state
    //must be abele to work in isolation
    cy.visit("http://localhost:3000/pizza");
  });

  // H E L P E R //
  const nameInput = () => cy.get("input[id ='name-input']");
  const smallPizza = () => cy.get("input[id ='small']");
  const medPizza = () => cy.get("input[id ='medium']");
  const largePizza = () => cy.get("input[id ='large']");
  const originalRedSause = () => cy.get("input[id ='originalRed']");
  const garlicRanchSause = () => cy.get("input[id ='galricRanch']");
  const BBQSauseSause = () => cy.get("input[id ='BBQSause']");
  const alfredoSause = () => cy.get("input[id ='spinichAlfredo']");
  const pepperoniTopping = () => cy.get("input[id ='pepperoni']");
  const sausageTopping = () => cy.get("input[id ='sausage']");
  const baconTopping = () => cy.get("input[id ='canadianBacon']");
  const italianSausageTopping = () => cy.get("input[id ='spicyItalianSausage']");
  const chickenTopping = () => cy.get("input[id ='grilledChicken']");
  const onionsTopping = () => cy.get("input[id ='onions']");
  const greenPepperTopping = () => cy.get("input[id ='greenPepper']");
  const dicedTomatosTopping = () => cy.get("input[id ='dicedTomatoes']");
  const blackOlivesTopping = () => cy.get("input[id ='blackOlive']");
  const rostedGarlicTopping = () => cy.get("input[id ='rostedGarlic']");
  const artichokeTopping = () => cy.get("input[id ='artichokeHearts']");
  const threeCheeseTopping = () => cy.get("input[id ='threeCheese']");
  const pinappleTopping = () => cy.get("input[id ='pineapple']");
  const extraCheeseTopping = () => cy.get("input[id ='extraCheese']");
  const substitute = () => cy.get("input[id ='substitute']");
  const specialText = () => cy.get("input[id ='special-text']");
  const orderButton = () => cy.get("button[id ='order-button']");
  const nameError = () => cy.get("div[id ='nameError']");
  const toppingsError = () => cy.get("div[id ='toppingsError']");

  it("Sanity check to make sure tests work", () => {
    //"it" is a test
    //"expect" is an assertion
    ///there can (and often are) multiple assertions per test
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(3);
    expect({}).not.to.equal({}); // ===
    expect({}).to.eql({}); // ==
  });

  it("The proper elements are showing", () => {
    nameInput().should("exist");
    smallPizza().should("exist");
    medPizza().should("exist");
    largePizza().should("exist");
    originalRedSause().should("exist");
    garlicRanchSause().should("exist");
    BBQSauseSause().should("exist");
    alfredoSause().should("exist");
    pepperoniTopping().should("exist");
    sausageTopping().should("exist");
    baconTopping().should("exist");
    italianSausageTopping().should("exist");
    chickenTopping().should("exist");
    onionsTopping().should("exist");
    greenPepperTopping().should("exist");
    dicedTomatosTopping().should("exist");
    blackOlivesTopping().should("exist");
    rostedGarlicTopping().should("exist");
    artichokeTopping().should("exist");
    threeCheeseTopping().should("exist");
    pinappleTopping().should("exist");
    extraCheeseTopping().should("exist");
    substitute().should("exist");
    specialText().should("exist");
    orderButton().should("exist");
    // nameInput;
    // smallPizza;
    // medPizza;
    // largePizza;
    // originalRedSause;
    // garlicRanchSause;
    // BBQSauseSause;
    // alfredoSause;
    // pepperoniTopping;
    // sausageTopping;
    // baconTopping;
    // italianSausageTopping;
    // chickenTopping;
    // onionsTopping;
    // greenPepperTopping;
    // dicedTomatosTopping;
    // blackOlivesTopping;
    // rostedGarlicTopping;
    // artichokeTopping;
    // threeCheeseTopping;
    // pinappleTopping;
    // extraCheeseTopping;
    // substitute;
    // specialText;
    // orderButton;
  });

  describe("Filling out the inputs and check if submit works", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost");
    });
    it("submit button starts out disabled", () => {
      orderButton().should("be.disabled");
    });
    it("can type in the inputs", () => {
      nameInput().should("have.value", "").type("Lorem ipsum").should("have.value", "Lorem ipsum");
      smallPizza().should("not.be.checked").check().should("be.checked");
      medPizza().should("not.be.checked").check().should("be.checked");
      largePizza().should("not.be.checked").check().should("be.checked");
      originalRedSause().should("not.be.checked").check().should("be.checked");
      garlicRanchSause().should("not.be.checked").check().should("be.checked");
      BBQSauseSause().should("not.be.checked").check().should("be.checked");
      alfredoSause().should("not.be.checked").check().should("be.checked");
      pepperoniTopping().should("not.be.checked").check().should("be.checked");
      sausageTopping().should("not.be.checked").check().should("be.checked");
      baconTopping().should("not.be.checked").check().should("be.checked");
      italianSausageTopping().should("not.be.checked").check().should("be.checked");
      chickenTopping().should("not.be.checked").check().should("be.checked");
      onionsTopping().should("not.be.checked").check().should("be.checked");
      greenPepperTopping().should("not.be.checked").check().should("be.checked");
      dicedTomatosTopping().should("not.be.checked").check().should("be.checked");
      blackOlivesTopping().should("not.be.checked").check().should("be.checked");
      rostedGarlicTopping().should("not.be.checked").check().should("be.checked");
      artichokeTopping().should("not.be.checked").check().should("be.checked");
      threeCheeseTopping().should("not.be.checked").check().should("be.checked");
      pinappleTopping().should("not.be.checked").check().should("be.checked");
      extraCheeseTopping().should("not.be.checked").check().should("be.checked");
      // substitute().should("not.be.checked").check().should("be.checked");
      // specialText()
      //   .should("have.value", "")
      //   .type("Lorem ipsum")
      //   .should("have.value", "Lorem ipsum");
    });
    it("the submit button enables when required inputs are populated", () => {
      nameInput().type("Lorem ipsum");
      smallPizza().check();
      originalRedSause().check();
      orderButton().should("not.be.disabled");
    });
    it("the error messages come up when inputs not valid", () => {
      nameInput().type("Lorem ipsum").clear();
      nameError().should("exist");
      pepperoniTopping().should("not.be.checked").check().should("be.checked");
      sausageTopping().should("not.be.checked").check().should("be.checked");
      baconTopping().should("not.be.checked").check().should("be.checked");
      italianSausageTopping().should("not.be.checked").check().should("be.checked");
      chickenTopping().should("not.be.checked").check().should("be.checked");
      onionsTopping().should("not.be.checked").check().should("be.checked");
      greenPepperTopping().should("not.be.checked").check().should("be.checked");
      dicedTomatosTopping().should("not.be.checked").check().should("be.checked");
      blackOlivesTopping().should("not.be.checked").check().should("be.checked");
      rostedGarlicTopping().should("not.be.checked").check().should("be.checked");
      artichokeTopping().should("not.be.checked").check().should("be.checked");
      threeCheeseTopping().should("not.be.checked").check().should("be.checked");
      pinappleTopping().should("not.be.checked").check().should("be.checked");
      extraCheeseTopping().should("not.be.checked").check().should("be.checked");
      toppingsError().should("exist");
    });
  });
});
