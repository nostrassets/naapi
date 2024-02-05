"use strict";var e=require("axios");function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function r(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?t(Object(s),!0).forEach((function(t){u(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function s(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(){function e(t){n(this,e),this.request=t}return a(e,[{key:"getBalance",value:function(e){return this.request.post("/assets/api/balanceOf",{user:e})}},{key:"getTokenList",value:function(){return this.request.post("/assets/api/getTokenList")}},{key:"getAllowance",value:function(e,t,r){return this.request.post("/assets/api/allowance",{token:e,owner:t,spender:r})}},{key:"getFundingRecords",value:function(e){var t=e.page,r=e.count,s=e.type,n=e.tokenAddress,o=e.address,a=e.status;return this.request.post("/assets/api/withdraw_deposit_list",{page:t,count:r,type:s,tokenAddress:n,address:o,status:a})}},{key:"getTokenEvents",value:function(e){var t=e.type,r=e.token,s=e.eventId,n=e.address,o=e.page,a=e.count;return this.request.post("/assets/api/tokenEvents",{type:t,token:r,eventId:s,address:n,page:o,count:a})}},{key:"getHolders",value:function(e){var t=e.assetId,r=e.owner,s=e.page,n=e.count;return this.request.post("/assets/api/getHolders",{assetId:t,owner:r,page:s,count:n})}},{key:"getHolder",value:function(e,t){return this.request.post("/assets/api/getHolder",{assetId:e,owner:t})}},{key:"getHolderSummary",value:function(e){return this.request.post("/assets/api/getHolderSummary",{assetId:e})}},{key:"getPayeeList",value:function(){return this.request.post("/assets/api/getPayeeList",{})}}]),e}(),c=function(){function e(t){n(this,e),this.request=t}return a(e,[{key:"getMarketTokenList",value:function(){return this.request.post("/market/api/getTokenList")}},{key:"getMarketOrderListing",value:function(e){var t=e.page,r=e.count,s=e.token,n=e.type;return this.request.post("/market/api/orderListing",{page:t,count:r,token:s,type:n})}},{key:"getOrderHistory",value:function(e){var t=e.count,r=e.page,s=e.type,n=e.token,o=e.eventId,a=e.status,u=e.address;return this.request.post("/market/api/orderHistory",{count:t,page:r,type:s,token:n,eventId:o,status:a,address:u})}},{key:"getMarketMyOrder",value:function(e){var t=e.count,r=e.page,s=e.type,n=e.token,o=e.status,a=e.owner;return this.request.post("/market/api/myOrder",{count:t,page:r,type:s,token:n,status:o,owner:a})}},{key:"getKline",value:function(e){var t=e.tokenAddress,r=e.startDataTime,s=e.endDataTime;return this.request.post("/market/api/kline",{tokenAddress:t,startDataTime:r,endDataTime:s})}}]),e}(),p=function(){function e(t){n(this,e),this.request=t}return a(e,[{key:"getStakeHoroscopList",value:function(e){var t=e.stakeId,r=e.staked;return this.request.post("/stake/getStakeHoroscopList",{stakeId:t,staked:r})}},{key:"getStakeActivity",value:function(){return this.request.post("/stake/getStakeActivity",{})}},{key:"getUserStakeInfo",value:function(e){var t=e.owner,r=e.stakeId;return this.request.post("/stake/getStakeUser",{owner:t,stakeId:r})}},{key:"getStakeUserList",value:function(e){var t=e.stakeId,r=e.horoscopId,s=e.page,n=e.count;return this.request.post("/stake/getStakeUserList",{stakeId:t,horoscopId:r,page:s,count:n})}},{key:"getRankingSummary",value:function(e){var t=e.stakeId,r=e.horoscopId;return this.request.post("/stake/getRankingSummary",{stakeId:t,horoscopId:r})}},{key:"getSearchRanking",value:function(e){var t=e.stakeId,r=e.horoscopId,s=e.ranking;return this.request.post("/stake/getSearchRanking",{stakeId:t,horoscopId:r,ranking:s})}},{key:"getBlockList",value:function(e){var t=e.stakeId,r=e.page,s=e.count,n=e.orderBy;return this.request.post("/stake/getBlockList",{stakeId:t,page:r,count:s,orderBy:n})}},{key:"getBlockStakeUserList",value:function(e){var t=e.stakeId,r=e.blockId;return this.request.post("/stake/getBlockStakeUserList",{stakeId:t,blockId:r})}}]),e}(),k=function(){function e(t){n(this,e),this.request=t}return a(e,[{key:"getLockList",value:function(e){var t=e.page,r=e.count;return this.request.post("/unlock/getUnlockList",{page:t,count:r})}}]),e}(),d=function(){function t(s,o,a){n(this,t),this.baseURL=s,this.headers=o||{},this.timeout=a||5e3,this.request=e.create({baseURL:this.baseURL,headers:r({"Content-Type":"application/json;charset=utf-8"},this.headers),timeout:a}),this.request.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),this.request.interceptors.response.use((function(e){return e?null==e?void 0:e.data:e}),(function(e){return Promise.reject(e)}))}return a(t,[{key:"asset",get:function(){return new i(this.request)}},{key:"market",get:function(){return new c(this.request)}},{key:"fairmint",get:function(){return new p(this.request)}},{key:"lock",get:function(){return new k(this.request)}}]),t}();module.exports=d;
