1.a) Tipagem Estática: O tipo das variáveis é verificado em tempo de compilação. O código não roda se houver incompatibilidade de tipos.

b) Benefícios: Traz maior performance (o compilador otimiza o código de máquina antecipadamente) e segurança (previne bugs de tipo antes de o código ir para produção).

c) Tipagem Dinâmica: A verificação ocorre em tempo de execução (runtime). O principal desafio é a perda de performance, pois o motor precisa validar o tipo de dado a cada linha executada.

d) Forte vs. Fraca: Linguagens fortes (como Python) proíbem operações entre tipos diferentes sem conversão explícita. Linguagens fracas (como JavaScript) realizam coerção implícita automática (ex: 1 + '2' = '12').

e) Linguagens Híbridas e Inferência: Combinam as duas abordagens aceitando tipos estáticos rígidos ou dinâmicos flexíveis (como TypeScript). A inferência de tipos permite que o compilador descubra o tipo da variável sozinho, baseado no valor atribuído inicial, sem você precisar escrever o tipo explicitamente.

f) JavaScript: É classificado como uma linguagem de tipagem dinâmica e fraca.