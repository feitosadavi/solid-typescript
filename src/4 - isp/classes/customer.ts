export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}
// Da forma abaixo, a minha interface seria totalmente incompatível com o princípio de segregação de interface
// pois eu estou forçando o cliente a depender de elementos que ele não necessita
export class IndividualCustomer implements CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string; // o cliente físico não precisa de cnpj

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = cnpj; //
  }
}
export class EnterpriseCustomer implements CustomerProtocol {
  // já aqui, uma empresa não precisaria de um nome, sobrenome e cpf
  firstName: string; //
  lastName: string; //
  cpf: string; //
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = cnpj;
  }
}

//        FORMA CORRETA
// Desta forma o cliente não é forçado a utilizar dados que não lhe são necessários
import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';
export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  // já aqui, uma empresa não precisaria de um nome, sobrenome e cpf
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
