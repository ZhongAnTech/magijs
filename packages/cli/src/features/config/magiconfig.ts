export default api => {
  const configDefaults: Record<string, any> = {
    model: {},
    request: {},
    antd: {},
    mfsu: false,
    ...api.userConfig,
  };

  api.modifyConfig((memo: any) => {
    Object.keys(configDefaults).forEach(key => {
      memo[key] = configDefaults[key];
    });
    return memo;
  });
};
