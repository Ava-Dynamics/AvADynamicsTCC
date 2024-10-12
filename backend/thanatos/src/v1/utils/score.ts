import * as puppeteer from 'puppeteer';

async function doLogin(page: puppeteer.Page, email, password: string) {
  try {
    await page.goto('https://www.megaconsultas.com.br/v2/');

    await page.type('input[name="email"]', email);
    await page.type('input[name="password"]', password);

    await Promise.all([
      page.click('input[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    return page.url().includes('/sistema');
  } catch (error) {
    console.log('Falha ao realizar login: ', error);
  }
}

export async function getScore(cpf, email, password: string) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  try {
    const page = await browser.newPage();

    if (!(await doLogin(page, email, password))) {
      return -1;
    }

    await page.goto(
      'https://www.megaconsultas.com.br/v2/consulta/realizar/sin-score-simples-pf',
    );

    await page.type('input[name="cpf"]', cpf);
    await Promise.all([
      page.click('#btn-enviar'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    const value = await page.evaluate(() => {
      return document.querySelector('.box-section .label-two span').textContent;
    });

    await browser.close();

    return parseInt(value);
  } catch (error) {
    console.log('Falha ao buscar score: ', error);
  } finally {
    await browser.close();
  }
}
