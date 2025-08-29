describe("Agenda de Contatos - Testes E2E", () => {
	beforeEach(() => {
		cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
	});

	it("Deve incluir um contato", () => {
		cy.get('input[type="text"]').type("Bob Esponja");
		cy.get('input[type="email"]').type("bob@fenda.com");
		cy.get('input[type="tel"]').type("111111111");
		cy.get("button.adicionar").click();

		cy.contains(".contato li", "Bob Esponja").should("exist");
	});

	it("Deve alterar um contato", () => {
		cy.get('input[type="text"]').type("Patrick Estrela");
		cy.get('input[type="email"]').type("patrick@fenda.com");
		cy.get('input[type="tel"]').type("222222222");
		cy.get("button.adicionar").click();

		cy.contains(".contato li", "Patrick Estrela")
			.closest(".contato")
			.find("button.edit")
			.click();

		cy.get('input[type="text"]').clear().type("Patrick Estrela Editado");
		cy.get('input[type="email"]').clear().type("patrickeditado@fenda.com");
		cy.get('input[type="tel"]').clear().type("333333333");
		cy.get('button[type="submit"]').click();

		cy.contains(".contato li", "Patrick Estrela Editado").should("exist");
	});

	it("Deve remover um contato", () => {
		cy.get('input[type="text"]').type("Lula Molusco");
		cy.get('input[type="email"]').type("lula@fenda.com");
		cy.get('input[type="tel"]').type("444444444");
		cy.get("button.adicionar").click();

		cy.contains(".contato li", "Lula Molusco")
			.closest(".contato")
			.find("button.delete")
			.click();

		cy.contains(".contato li", "Lula Molusco").should("not.exist");
	});
});
