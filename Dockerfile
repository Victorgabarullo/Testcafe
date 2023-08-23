FROM testcafe/testcafe

USER root

WORKDIR /bonuswallet

COPY . .

RUN npm i

ENTRYPOINT ["npm", "run", "test"]