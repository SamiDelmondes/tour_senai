"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6608],
  {
    76608: function (n, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return k;
          },
        });
      var r = a(47568),
        t = a(828),
        i = a(29815),
        o = a(70655),
        l = a(85893),
        s = a(67294),
        d = a(68863),
        m = a(79915),
        u = a(94594),
        c = a(17352),
        p = a(71577),
        b = a(41799),
        f = a(69396),
        h = a(99534),
        v = a(7297);
      function x() {
        var n = (0, v.Z)([
          "\n  width: 100%;\n  height: 100%;\n  .ant-input-affix-wrapper,\n  .ant-input-affix-wrapper:not(\n      .ant-form-item-has-error .ant-input-affix-wrapper-disabled\n    ) {\n    /* background: none !important;\n    border: none; */\n    background: rgb(0 0 0 / 0.2);\n    border: 1px solid rgba(255, 255, 255, 0.15);\n    border-radius: 2px;\n    box-shadow: none !important;\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        border-color: rgb(255 255 255 / 0.5);\n      }\n    }\n    &.ant-input-affix-wrapper-focused {\n      border-color: #fff;\n    }\n  }\n\n  .ant-form-item-has-error .ant-input,\n  .ant-form-item-has-error .ant-input-affix-wrapper,\n  .ant-form-item-has-error .ant-input:hover,\n  .ant-form-item-has-error .ant-input-affix-wrapper:hover,\n  .ant-form-item-has-error\n    .ant-input-affix-wrapper:not(\n      .ant-form-item-has-error .ant-input-affix-wrapper-disabled\n    ),\n  .ant-form-item-has-error\n    .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)\n    .ant-select-selector {\n    background: rgb(255 0 0 / 2.5%) !important;\n    border-color: var(--color-red) !important;\n    box-shadow: 0 0 0 4px rgb(255 0 0 / 10%) !important;\n  }\n\n  .ant-form-item {\n    margin-bottom: 12px;\n    &-with-help {\n      margin-bottom: 0px;\n    }\n    /* &:nth-last-child(2) {\n      margin-bottom: 24px;\n    } */\n    .ant-form-item-label {\n      padding: 0 0 0.125rem 0;\n      position: relative;\n      z-index: 2;\n      label {\n        /* color: var(--color-yellow); */\n        color: var(--color-smoke);\n        background: var(--color-dark-3);\n        font-size: 0.75rem;\n      }\n    }\n    .ant-input-suffix span {\n      color: #fff;\n    }\n    .ant-form-item .ant-input {\n      background: rgba(0, 0, 0, 0.05);\n      border: 1px solid transparent;\n      border-radius: 6px;\n      transition: all 0.15s ease-out;\n      padding: 0.5rem;\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          border-color: rgba(0, 0, 0, 0.15);\n        }\n      }\n      &:focus {\n        border-color: rgba(0, 0, 0, 0.35);\n        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);\n        background: #fff;\n      }\n    }\n    .ant-input {\n      /* background: none !important; */\n      /* border: none; */\n    }\n\n    .ant-input-number {\n      background: rgba(0, 0, 0, 0.05);\n      border: 1px solid transparent;\n      border-radius: 6px;\n      transition: all 0.15s ease-out;\n      height: 40px;\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          border-color: rgba(0, 0, 0, 0.15);\n        }\n      }\n      &-focused {\n        border-color: rgba(0, 0, 0, 0.35) !important;\n        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);\n        background: #fff !important;\n      }\n      &-not-a-number {\n        background: rgb(255 0 0 / 2.5%);\n        border-color: var(--color-red) !important;\n        box-shadow: 0 0 0 4px rgb(255 0 0 / 10%);\n      }\n      &-handler-wrap {\n        border-radius: 0 6px 6px 0;\n      }\n      &-input {\n        height: 40px;\n      }\n    }\n    .ant-input-number-input {\n    }\n\n    .ant-form-item .ant-select .ant-select-selector {\n      border-radius: 2px;\n    }\n  }\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active {\n    // background: #fff !important;\n    background-color: #fff !important;\n    -webkit-text-fill-color: var(--color-dark) !important;\n  }\n\n  .ant-switch {\n    &-checked {\n      background-color: var(--color-theme);\n    }\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      var g = a(19521).ZP.div.withConfig({
          displayName: "styled__FormContainerWrapper",
          componentId: "Panoee__sc-66b4dde6-0",
        })(x()),
        $ = (0, s.memo)(
          (0, s.forwardRef)(function (n, e) {
            var a = n.listFields,
              r = n.validateMessages,
              i = (0, h.Z)(n, ["listFields", "validateMessages"]),
              o = (0, t.Z)(c.Z.useForm(), 1)[0];
            return (
              s.useImperativeHandle(e, function () {
                return {
                  getFormInstance: function () {
                    return o;
                  },
                };
              }),
              (0, l.jsx)(g, {
                children: (0, l.jsx)(
                  c.Z,
                  (0, f.Z)(
                    (0, b.Z)(
                      {
                        validateMessages: (0, b.Z)(
                          {},
                          {
                            required: "${name} is required",
                            string: {
                              len: "${name} must be exactly ${len} characters",
                              min: "${name} must be at least ${min} characters",
                              max: "${name} cannot be longer than ${max} characters",
                              range:
                                "${name} must be between ${min} and ${max} characters",
                            },
                            types: {
                              email: "${name} is invalid ${type}",
                              number: "${name} is invalid ${type}",
                              string: "${name} is invalid ${type}",
                              date: "${name} is invalid ${type}",
                              method: "${name} is invalid ${type}",
                              array: "${name} is invalid ${type}",
                              object: "${name} is invalid ${type}",
                              boolean: "${name} is invalid ${type}",
                              integer: "${name} is invalid ${type}",
                              float: "${name} is invalid ${type}",
                              regexp: "${name} is invalid ${type}",
                              url: "${name} is invalid ${type}",
                              hex: "${name} is invalid ${type}",
                            },
                            number: {
                              len: "${name} must equal ${len}",
                              min: "${name} cannot be less than ${min}",
                              max: "${name} cannot be greater than ${max}",
                              range:
                                "${name} must be between ${min} and ${max}",
                            },
                            array: {
                              len: "${name} must be exactly ${len} in length",
                              min: "${name} cannot be less than ${min} in length",
                              max: "${name} cannot be greater than ${max} in length",
                              range:
                                "${name} must be between ${min} and ${max} in length",
                            },
                            pattern: {
                              mismatch:
                                "${name} does not match pattern ${pattern}",
                            },
                            enum: "${name} must be one of [${enum}]",
                            whitespace: "${name} cannot be empty",
                            date: {
                              format: "${name} is invalid for format date",
                              parse: "${name} could not be parsed as date",
                              invalid: "${name} is invalid date",
                            },
                          },
                          r,
                        ),
                      },
                      i,
                    ),
                    {
                      form: o,
                      children: a.map(function (n) {
                        var e = n.children,
                          a = (0, h.Z)(n, ["children"]);
                        return (
                          e &&
                          (0, l.jsx)(
                            c.Z.Item,
                            (0, f.Z)((0, b.Z)({}, a), { children: e }),
                            n.name || new Date().toString(),
                          )
                        );
                      }),
                    },
                  ),
                ),
              })
            );
          }),
        ),
        w = a(33618),
        y = d.Z.TextArea,
        k = (0, s.memo)(function (n) {
          var e,
            a = n.formCaptureSelected,
            b = n.onCancel,
            f = (0, s.useRef)(null),
            h = (0, t.Z)((0, s.useState)(!1), 2),
            v = h[0],
            x = h[1],
            g = (0, s.useCallback)(function (n) {
              switch (n.type) {
                case "input":
                case "email":
                  return (0, l.jsx)(d.Z, { placeholder: n.label });
                case "number":
                  return (0, l.jsx)(m.Z, { placeholder: n.label });
                case "boolean":
                  return (0, l.jsx)(u.Z, {
                    checkedChildren: "Yes",
                    unCheckedChildren: "No",
                  });
                case "textarea":
                  return (0, l.jsx)(y, { rows: 5, placeholder: n.label });
                default:
                  return null;
              }
            }, []),
            k = (0, s.useMemo)(
              function () {
                return (0, i.Z)(
                  ((null == a ? void 0 : a.fields) || []).map(function (n) {
                    return {
                      label: "",
                      name: n.label,
                      labelCol: { span: 0 },
                      wrapperCol: { span: 24 },
                      children: (0, l.jsxs)("div", {
                        className: "field-item",
                        children: [
                          (0, l.jsx)("div", {
                            className: "field-item__title",
                            children: n.label,
                          }),
                          (0, l.jsx)("div", {
                            className: "field-item__content",
                            children: (0, l.jsx)(c.Z.Item, {
                              name: n.label,
                              rules: [
                                { required: !!n.required },
                                "number" === n.type
                                  ? {
                                      pattern: /^-?\d+\.?\d*$/,
                                      message: "Number is invalid",
                                    }
                                  : {
                                      type:
                                        "email" === n.type ||
                                        "boolean" === n.type
                                          ? n.type
                                          : "string",
                                    },
                              ],
                              valuePropName:
                                "boolean" === n.type ? "checked" : "value",
                              initialValue:
                                "boolean" !== n.type &&
                                ("number" === n.type ? 0 : ""),
                              children: g(n),
                            }),
                          }),
                        ],
                      }),
                    };
                  }),
                );
              },
              [null == a ? void 0 : a.fields, g],
            ),
            j = (0, s.useCallback)(
              ((e = (0, r.Z)(function (n) {
                var e;
                return (0, o.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, , 2, 3]),
                        x(!0),
                        (e = {
                          sheet_id: null == a ? void 0 : a.google_sheet_id,
                          refresh_token: null == a ? void 0 : a.refresh_token,
                          user_id: null == a ? void 0 : a.user_id,
                          header: Object.keys(n),
                          row: Object.values(n),
                        }),
                        [4, w.R.$post("/plugin/updateToGooleSheet", e)]
                      );
                    case 1:
                      return r.sent(), b(), [3, 3];
                    case 2:
                      return x(!1), [7];
                    case 3:
                      return [2];
                  }
                });
              })),
              function (n) {
                return e.apply(this, arguments);
              }),
              [a, b],
            );
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: "header",
                children: [
                  (0, l.jsx)("div", {
                    className: "title",
                    children: null == a ? void 0 : a.title,
                  }),
                  (0, l.jsx)("div", {
                    className: "desc",
                    children: null == a ? void 0 : a.description,
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "body",
                children: (0, l.jsx)("div", {
                  className: "content",
                  children: (0, l.jsx)($, {
                    ref: f,
                    layout: "vertical",
                    colon: !1,
                    listFields: k,
                    onFinish: j,
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: "footer",
                children: (0, l.jsx)(p.Z, {
                  loading: v,
                  className: "btn btn-submit",
                  onClick: function () {
                    var n;
                    null === (n = f.current) ||
                      void 0 === n ||
                      n.getFormInstance().submit();
                  },
                  children: (null == a ? void 0 : a.buttonTxt) || "Submit",
                }),
              }),
            ],
          });
        });
    },
  },
]);
//# sourceMappingURL=6608.4365dd63c5ab7462.js.map
