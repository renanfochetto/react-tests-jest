import {calculaNovoSaldo} from "./index";

describe('Quando eu realizo uma transação', () => {
    test('Que é um depósito, o saldo deve aumentar', () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 50
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);

        expect(novoSaldo).toBe(150);
    });

    test('Que é uma transferência, o saldo deve diminuir', () => {
        const transacao = {
            transacao: 'Transferência',
            valor: 50
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);

        expect(novoSaldo).toBe(50);
    });
})

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calculaRendimento = jest.fn(saldo => saldo + (saldo * 0.05));
    const saldo = 100;
    const saldoAtualizado = calculaRendimento(saldo);

    expect(saldoAtualizado).toBe(105);
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toBeCalledWith(saldo);
});

