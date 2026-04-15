"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WAInteractiveMessagesNativeFlowName = exports.WAProductOrderTypeEnum = exports.WAPaymentOrderStatusEnum = exports.WAPaymentStatusEnum = exports.WAPaymentSettingsTypeEnum = exports.WAPixTypes = exports.WAWebInteractiveMessagesNativeFlowNameEnum = exports.WAMessageAddressingMode = exports.WAMessageStatus = exports.WAMessageStubType = exports.WAProto = void 0;
const index_js_1 = require("../../WAProto/index.js");
Object.defineProperty(exports, "WAProto", { enumerable: true, get: function () { return index_js_1.proto; } });
exports.WAMessageStubType = index_js_1.proto.WebMessageInfo.StubType;
exports.WAMessageStatus = index_js_1.proto.WebMessageInfo.Status;
var WAMessageAddressingMode;
(function (WAMessageAddressingMode) {
    WAMessageAddressingMode["PN"] = "pn";
    WAMessageAddressingMode["LID"] = "lid";
})(WAMessageAddressingMode || (exports.WAMessageAddressingMode = WAMessageAddressingMode = {}));
var WAWebInteractiveMessagesNativeFlowNameEnum;
(function (WAWebInteractiveMessagesNativeFlowNameEnum) {
    WAWebInteractiveMessagesNativeFlowNameEnum["REVIEW_AND_PAY"] = "review_and_pay";
    WAWebInteractiveMessagesNativeFlowNameEnum["PAYMENT_INFO"] = "payment_info";
    WAWebInteractiveMessagesNativeFlowNameEnum["REVIEW_ORDER"] = "review_order";
    WAWebInteractiveMessagesNativeFlowNameEnum["ORDER_STATUS"] = "order_status";
    WAWebInteractiveMessagesNativeFlowNameEnum["PAYMENT_STATUS"] = "payment_status";
    WAWebInteractiveMessagesNativeFlowNameEnum["PAYMENT_METHOD"] = "payment_method";
    WAWebInteractiveMessagesNativeFlowNameEnum["OPEN_WEBVIEW"] = "open_webview";
    WAWebInteractiveMessagesNativeFlowNameEnum["MESSAGE_WITH_LINK_STATUS"] = "message_with_link_status";
    WAWebInteractiveMessagesNativeFlowNameEnum["CTA_URL"] = "cta_url";
    WAWebInteractiveMessagesNativeFlowNameEnum["CTA_CALL"] = "cta_call";
    WAWebInteractiveMessagesNativeFlowNameEnum["CTA_CATALOG"] = "cta_catalog";
    WAWebInteractiveMessagesNativeFlowNameEnum["CTA_COPY"] = "cta_copy";
    WAWebInteractiveMessagesNativeFlowNameEnum["REPLY"] = "quick_reply";
    WAWebInteractiveMessagesNativeFlowNameEnum["MIXED"] = "mixed";
    WAWebInteractiveMessagesNativeFlowNameEnum["GALAXY_MESSAGE"] = "galaxy_message";
})(WAWebInteractiveMessagesNativeFlowNameEnum || (exports.WAWebInteractiveMessagesNativeFlowNameEnum = WAWebInteractiveMessagesNativeFlowNameEnum = {}));
var WAPixTypes;
(function (WAPixTypes) {
    WAPixTypes["CPF"] = "CPF";
    WAPixTypes["CNPJ"] = "CNPJ";
    WAPixTypes["EMAIL"] = "EMAIL";
    WAPixTypes["RANDOM"] = "EVP";
    WAPixTypes["PHONE"] = "PHONE";
})(WAPixTypes || (exports.WAPixTypes = WAPixTypes = {}));
var WAPaymentSettingsTypeEnum;
(function (WAPaymentSettingsTypeEnum) {
    WAPaymentSettingsTypeEnum["BOLETO"] = "boleto";
    WAPaymentSettingsTypeEnum["CARDS"] = "cards";
    WAPaymentSettingsTypeEnum["PAYMENT_GATEWAY"] = "payment_gateway";
    WAPaymentSettingsTypeEnum["PAYMENT_LINK"] = "payment_link";
    WAPaymentSettingsTypeEnum["PIX_DYNAMIC_CODE"] = "pix_dynamic_code";
    WAPaymentSettingsTypeEnum["PIX_STATIC_CODE"] = "pix_static_code";
})(WAPaymentSettingsTypeEnum || (exports.WAPaymentSettingsTypeEnum = WAPaymentSettingsTypeEnum = {}));
var WAPaymentStatusEnum;
(function (WAPaymentStatusEnum) {
    WAPaymentStatusEnum["CAPTURED"] = "captured";
    WAPaymentStatusEnum["PENDING"] = "pending";
})(WAPaymentStatusEnum || (exports.WAPaymentStatusEnum = WAPaymentStatusEnum = {}));
var WAPaymentOrderStatusEnum;
(function (WAPaymentOrderStatusEnum) {
    WAPaymentOrderStatusEnum["PENDING"] = "pending";
    WAPaymentOrderStatusEnum["PROCESSING"] = "processing";
    WAPaymentOrderStatusEnum["PARTIALLY_SHIPPED"] = "partially_shipped";
    WAPaymentOrderStatusEnum["SHIPPED"] = "shipped";
    WAPaymentOrderStatusEnum["COMPLETE"] = "completed";
    WAPaymentOrderStatusEnum["CANCELED"] = "canceled";
    WAPaymentOrderStatusEnum["PAYMENT_REQUESTED"] = "payment_requested";
    WAPaymentOrderStatusEnum["PREPARING_TO_SHIP"] = "preparing_to_ship";
    WAPaymentOrderStatusEnum["DELIVERED"] = "delivered";
    WAPaymentOrderStatusEnum["CONFIRMED"] = "confirmed";
    WAPaymentOrderStatusEnum["DELAYED"] = "delayed";
    WAPaymentOrderStatusEnum["OUT_FOR_DELIVERY"] = "out_for_delivery";
    WAPaymentOrderStatusEnum["FAILED"] = "failed";
})(WAPaymentOrderStatusEnum || (exports.WAPaymentOrderStatusEnum = WAPaymentOrderStatusEnum = {}));
var WAProductOrderTypeEnum;
(function (WAProductOrderTypeEnum) {
    WAProductOrderTypeEnum["DIGITAL_GOODS"] = "digital-goods";
    WAProductOrderTypeEnum["PHYSICAL_GOODS"] = "physical-goods";
    WAProductOrderTypeEnum["ANY"] = "any";
    WAProductOrderTypeEnum["NONE"] = "none";
})(WAProductOrderTypeEnum || (exports.WAProductOrderTypeEnum = WAProductOrderTypeEnum = {}));
var WAInteractiveMessagesNativeFlowName;
(function (WAInteractiveMessagesNativeFlowName) {
    WAInteractiveMessagesNativeFlowName["ORDER_DETAILS"] = "order_details";
    WAInteractiveMessagesNativeFlowName["ORDER_STATUS"] = "order_status";
    WAInteractiveMessagesNativeFlowName["PAYMENT_STATUS"] = "payment_status";
    WAInteractiveMessagesNativeFlowName["PAYMENT_METHOD"] = "payment_method";
    WAInteractiveMessagesNativeFlowName["MESSAGE_WITH_LINK"] = "message_with_link";
    WAInteractiveMessagesNativeFlowName["MESSAGE_WITH_LINK_STATUS"] = "message_with_link_status";
    WAInteractiveMessagesNativeFlowName["QUICK_REPLY"] = "quick_reply";
    WAInteractiveMessagesNativeFlowName["CTA_CALL"] = "cta_call";
    WAInteractiveMessagesNativeFlowName["CTA_URL"] = "cta_url";
    WAInteractiveMessagesNativeFlowName["CTA_CATALOG"] = "cta_catalog";
    WAInteractiveMessagesNativeFlowName["PAYMENT_INFO"] = "payment_info";
    WAInteractiveMessagesNativeFlowName["CTA_COPY_CODE"] = "cta_copy";
    WAInteractiveMessagesNativeFlowName["MIXED"] = "mixed";
    WAInteractiveMessagesNativeFlowName["CTA_FLOW"] = "galaxy_message";
})(WAInteractiveMessagesNativeFlowName || (exports.WAInteractiveMessagesNativeFlowName = WAInteractiveMessagesNativeFlowName = {}));
//# sourceMappingURL=Message.js.map