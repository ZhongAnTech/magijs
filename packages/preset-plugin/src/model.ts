import modelPlugin from '@umijs/plugins/dist/model';
import { logger } from '@umijs/utils';

export default api => {
  api.describe({
    key: 'model',
    config: {
      schema(Joi) {
        return Joi.object({
          extraModels: Joi.array().items(Joi.string()),
        });
      },
    },
    // 默认开启
    // enableBy: api.EnableBy.config,
  });
  // only dev or build running
  if (!['dev', 'build'].includes(api.name)) return;

  api.onStart(() => {
    logger.info('Using Mobile Layout Plugin');
  });

  // umi model 里面不注册
  api.describe = () => {};
  // @ts-ignore
  modelPlugin(api);
};
