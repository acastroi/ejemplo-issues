describe('Crear, editar y borrar una página en ghost', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/');
  })

  it('Ingresar a ghost y crear página', () => {
    cy.fixture('login.json').then((login) => {
      cy.get("#ember6").type(login.userName);
      cy.get('#ember8').type(login.password);
    })
    cy.get('#ember10 > span').click();

    cy.get('a[href*="#/pages/"]').click();
    cy.get('[id^=ember]').contains("New page").click();
    cy.get('.gh-editor-title').type("Pruebas automatizadas");
    cy.get(".koenig-editor__editor").type('Este texto hace parte de una prueba automatizada para crear una nueva página usando el sistema gestor de contenidos ghost');
    cy.get(".darkgrey > span").click();
    cy.get(".gh-publish-cta > .gh-btn > span").click();
    cy.get("[id^=ember]").click();
  })

  it("Ingresar a ghost y editar una página", () => {
    cy.fixture("login.json").then((login) => {
      cy.get("#ember6").type(login.userName);
      cy.get("#ember8").type(login.password);
    });
    cy.get("#ember10 > span").click();
    cy.get('a[href*="#/pages/"]').click();
    cy.get(".darkgrey > span").click();
    cy.get(".gh-publish-cta > .gh-btn > span").click();
    cy.get("[id^=ember]").click();
  });

  it("Ingresar a ghost y borrar una página", () => {
    cy.fixture("login.json").then((login) => {
      cy.get("#ember6").type(login.userName);
      cy.get("#ember8").type(login.password);
    });
    cy.get("#ember10 > span").click();
    cy.get('a[href*="#/pages/"]').click();
    cy.get('a[href*="#/editor/page/6383b39d9776138144dbfc15/"]').click();
    cy.get('button[title="Settings"]').click();
    cy.get('button[title="Settings" > span]').contains("Delete").click();
    cy.get('.modal-.gh-btn-red').click();

  });

});