import getModels from '../db/models';

async function getEachModel(url: string) {
  const db = await getModels();
  let models = Object.keys(db).map(async (modelName) => {
    let myRegex = new RegExp(modelName, 'i');
    if (myRegex.test(url)) {
      return db[modelName];
    }
  });
  models.map(async (promise) => {
    if (await promise) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      promise.then(async function (promise: any) {
        if (promise) {
          return promise;
        }
      });
    }
  });
}

export default getEachModel;
