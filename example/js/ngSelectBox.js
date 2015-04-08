(function(window, angular, undefined) {'use strict';
  angular.module('ngSelectBox', [])
  .run(['$templateCache', function($templateCache) {
  		var selectHtml =
  			'<dl class="ngSelectBox">\
  				<dt>\
  					<a href="#" ng-style="ngSelectBoxStyle" ng-click="toggleOptions()">\
  						<span><img ng-show="isSelectedImageVisible" ng-src="{{selectedImage}}" style="height: 11px; padding-right: 2px;"/>{{selectedLabel}}\
  						</span>\
  					</a>\
  				</dt>\
  				<dd>\
  					<ul ng-style="isOptionVisible" id="ngSelectBoxParent" ng-transclude>\
  					</ul>\
  				</dd>\
  			</dl>';
  
  		$templateCache.put("select.html", selectHtml);
  	}])
  
  .directive('ngOptgroup', [function() {
  	return {
  		restrict: 'E',
  		scope: {
  			optGroupLabel: '@label',
  			optGroupValue: '@value',
  			optGroupImage: '@image',
  			optGroupTextColor: '@textColor'
  		},
  		transclude: true,
  		replace: true,
  		template: "<li>\
    						<b>\
    							<a href='#' ng-click='getValue(optGroupLabel, optGroupValue, optGroupImage)' ng-style='textColor'>\
    								<img ng-show='isOptGroupImageVisible' class='image' ng-src='{{optGroupImage}}' style='padding-right:1px;' />{{optGroupLabel}}\
    							</a>\
    						</b>\
    					</li>",
  		require: '^ngSelectBox',
  		link: function(scope, elem, attrs, ngSelectBox, transclude) {
  			elem.find("a").css("text-decoration", "none").css("outline", "none").css("padding", "5px").css("display", "block").css("color", "#000000");
  			elem.find("img").css("border", "none").css("vertical-align", "middle").css("margin-left", "1px");
  
  			elem.find("a").bind("mouseover", function() {
  				scope.actualColor = scope.textColor.color;
  				elem.find('a').eq(0).css('color', 'white').css('background-color', '#27A1EC');
  			});
  
  			elem.find("a").bind("mouseleave", function() {
  				elem.find('a').eq(0).css('color', scope.actualColor).css('background-color', 'white');
  			});
  
  			if (scope.optGroupTextColor !== undefined) {
  				scope.textColor = {
  					'color': scope.optGroupTextColor
  				};
  			} else {
  				scope.textColor = {
  					'color': '#000000'
  				};
  			}
  
  			ngSelectBox.space = "\u00A0\u00A0\u00A0";
  			scope.isOptGroupImageVisible = false;
  
  			if (scope.optGroupImage !== undefined) {
  				scope.isOptGroupImageVisible = true;
  			}
  
  			transclude(function(clone, scope) {
  				elem.append(clone);
  			});
  
  			scope.getValue = function(optGroupLabel, optGroupValue, optGroupImage) {
  				ngSelectBox.getValue(optGroupLabel, optGroupValue, optGroupImage);
  			};
  		}
  	};
  }])
  
  .directive('ngOption', [function() {
  	return {
  		restrict: 'E',
  		scope: {
  			optionLabel: '@label',
  			optionValue: '@value',
  			optSelection: '@selected',
  			optImage: '@image',
  			optTextColor: '@textColor'
  		},
  		replace: true,
  		template: "<li>\
  						<a href='#' ng-click='getValue(optionLabel, optionValue, optImage)' ng-style='textColor'>{{space}}\
  							<img ng-show='isOptImageVisible' class='image' ng-src='{{optImage}}' style='padding-right:2px;' />{{optionLabel}}\
  						</a>\
  					</li>",
  		require: '^ngSelectBox',
  		link: function(scope, elem, attrs, ngSelectBox) {
  			elem.find("a").css("text-decoration", "none").css("outline", "none").css("padding", "5px").css("display", "block").css("color", "#000000");
  			elem.find("img").css("border", "none").css("vertical-align", "middle").css("margin-left", "1px");
  
  			elem.find("a").bind("mouseover", function() {
  				scope.actualColor = scope.textColor.color;
  				elem.find('a').css('color', 'white').css('background-color', '#27A1EC');
  			});
  
  			elem.find("a").bind("mouseleave", function() {
  				elem.find('a').css('color', scope.actualColor).css('background-color', 'white');
  			});
  
  			scope.space = ngSelectBox.space;
  			scope.isOptImageVisible = false;
  
  			if (scope.optImage !== undefined) {
  				scope.isOptImageVisible = true;
  			}
  
  			if (scope.optTextColor !== undefined) {
  				scope.textColor = {
  					'color': scope.optTextColor
  				};
  			} else {
  				scope.textColor = {
  					'color': '#000000'
  				};
  			}
  
  			if ((scope.optSelection === 'false') === false) {
  				ngSelectBox.getValue(scope.optionLabel, scope.optionValue, scope.optImage);
  			}
  
  			scope.getValue = function(optionLabel, optionValue, optImage) {
  				ngSelectBox.getValue(optionLabel, optionValue, optImage);
  			};
  		}
  	};
  }])
  
  .directive('ngSelectBox', ['$document', function($document) {
  	return {
  		restrict: 'E',
  		replace: true,
  		scope: {
  			ngModel: '=',
  			width: "@width"
  		},
  		transclude: true,
  		templateUrl: 'select.html',
  
  		compile: function(tElem, tAttrs) {
  			return {
  				pre: function(scope, iElem, iAttrs) {
  					angular.element(document.querySelector('.ngSelectBox')).css("font-family", "Arial, Helvetica, Sans-Serif").css("font-size", "0.75em").css("color", "#000");
  					angular.element(document.querySelector('.ngSelectBox dd')).css("margin", "0px").css("padding", "0px").css("position", "relative");
  					angular.element(document.querySelector('.ngSelectBox dt')).css("margin", "0px").css("padding", "0px");
  					angular.element(document.querySelector('.ngSelectBox ul')).css("margin", "0px").css("padding", "0px");
  					angular.element(document.querySelector('.ngSelectBox a')).css("text-decoration", "none").css("outline", "none");
  					angular.element(document.querySelector('.ngSelectBox dt a')).css("color", "#000000").css("background-image", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABGdBTUEAALGPC/xhBQAAAAZQTFRFAAAAAAAApWe5zwAAAAF0Uk5TAEDm2GYAAAAcSURBVAjXY2BABfIfQIj/AQP7AQbmBgZGNGkGAHE3BFlmUXkHAAAAAElFTkSuQmCC)").css("background-repeat", "no-repeat").css("background-position", "right center").css("display", "block").css("padding-right", "20px").css("border", "1px solid #CDCDCD").css("width", "150px");
  					angular.element(document.querySelector('.ngSelectBox dt a span')).css("cursor", "pointer").css("display", "block").css("padding", "5px");
  					angular.element(document.querySelector('.ngSelectBox dd ul')).css("background", "#ffffff none repeat scroll 0 0").css("border", "1px solid #CDCDCD").css("color", "#CDCDCD").css("display", "none").css("left", "0px").css("padding", "5px 0px").css("position", "absolute").css("top", "0px").css("width", "auto").css("min-width", "170px").css("list-style", "none");
  					angular.element(document.querySelector('.ngSelectBox dd ul li a')).css("padding", "5px").css("display", "block").css("color", "#000000");
  
  					scope.isOptionVisible = {};
  					scope.isOptionVisible.overflow = 'hidden';
  					scope.isOptionVisible['white-space'] = 'nowrap';
  					scope.isOptionVisible['text-overflow'] = 'ellipsis';
  					scope.ngSelectBoxStyle = angular.copy(scope.isOptionVisible);
  					scope.isOptionVisible.display = 'none';
  
  					if (scope.width) {
  						scope.isOptionVisible.width = parseInt(scope.width.substring(0, scope.width.indexOf('p'))) + 20 + "px";
  						scope.ngSelectBoxStyle.width = scope.width;
  					}
  
  					scope.toggleOptions = function() {
  						scope.isOptionVisible.display = (scope.isOptionVisible.display === 'none' ? 'block' : 'none');
  						$document.on("click", scope.onClick);
  					};
  
  					scope.onClick = function(event) {
  						if (scope.isOptionVisible.display !== 'none') {
  							scope.isOptionVisible.display = 'none';
  							return;
  						} 
  
  						scope.$apply(iAttrs.clickAnywhereButHere);
  						$document.off("click", scope.onClick);
  					};
  				}
  			}
  		},
  		controller: ['$scope',function($scope) {
  			this.space = "";
  			function isJsonObject(object){
           try{
              JSON.parse(object)
              return true;
           }
           catch(err){
              return false;
           }
  			}
  
  			this.getValue = function(optionLabel, optionValue, optionImage) {
  				$scope.selectedLabel = optionLabel;
  				$scope.selectedValue = optionValue;
  
  				if (optionImage) {
  					$scope.selectedImage = optionImage;
  					$scope.isSelectedImageVisible = true;
  				} else {
  					$scope.isSelectedImageVisible = false;
  				}
  				
          if(isJsonObject(optionValue)){
            $scope.ngModel = JSON.parse(optionValue);
          } 
          else{
            $scope.ngModel = optionValue;
          }
  			};
  		}]
  	};
  }]);
})(window, window.angular);
