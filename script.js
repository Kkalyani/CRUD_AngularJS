
        var myapp = angular.module('myapp',[]);
        myapp.controller('productController', function($scope){
          $scope.listProducts = [
              {id:'p01',name:'Product 1',price:1000,quantity:20},
              {id:'p02',name:'Product 2',price:2000,quantity:21},
              {id:'p03',name:'Product 3',price:3000,quantity:22},
              {id:'p04',name:'Product 4',price:4000,quantity:23}  
          ];

          $scope.save = function(){
            var index = getSelectedIndex($scope.id);
            $scope.listProducts[index].name = $scope.name;
            $scope.listProducts[index].price = $scope.price;
            $scope.listProducts[index].quantity = $scope.quantity;
          }
          $scope.Add = function(){
               $scope.listProducts.push({
               id:$scope.id , name:$scope.name , price:$scope.price , quantity:$scope.quantity
             });
            $scope.id = "";
             $scope.name = "";
             $scope.price = "";
             $scope.quantity = "";
          };

          $scope.selectEdit = function(id){
             
             var index = getSelectedIndex(id);
             var product = $scope.listProducts[index];
            
             $scope.id = product.id;
             $scope.name = product.name;
             $scope.price = product.price;
             $scope.quantity = product.quantity;
          }

         $scope.delete = function(id){
            var result = confirm("Are you sure want to delete?");
            console.log(result);
            if(result === true)
            {
                var index = getSelectedIndex(id);
                $scope.listProducts.splice(index , 1);
            }
         };
         $scope.reset = function(){
             $scope.id = "";
             $scope.name = "";
             $scope.price = "";
             $scope.quantity = "";
         }
         function getSelectedIndex(id){
           var i=0;
           while(i < $scope.listProducts.length){
               if($scope.listProducts[i].id == id)
               {
                   return i;
               }
               else
               {
                   i++;
               }
           } 
         }
        })
    