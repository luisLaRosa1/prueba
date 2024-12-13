create table Product (
    Id int primary key identity(1,1),
    Name varchar(255),
    Description varchar(255),
    Price decimal(18,4)
);

CREATE PROCEDURE sp_list_product  
AS  
BEGIN  
	select * from Product
END

CREATE PROCEDURE sp_insert_product    
(
 @Name varchar(255),    
 @Description varchar(255),    
 @Price decimal(18,4),
 @Success INT OUT,    
 @Message varchar(8000) OUTPUT)    
AS  
BEGIN    
    SET NOCOUNT ON;    
    BEGIN TRY      
    BEGIN TRANSACTION    
        SET @Success = 0;    
       
       	insert into Product
       	select @Name,@Description,@Price           
          
        SET @Success = 1;   
        SET @Message = 'OK'        
        COMMIT;      
    END TRY          
    BEGIN CATCH          
        SET @Success = 0          
        SET @Message = 'LÍNEA: ' + CAST(ERROR_LINE() AS VARCHAR(100)) + ' ERROR: ' + ERROR_MESSAGE()       
        ROLLBACK          
    END CATCH          
    SET NOCOUNT OFF;      
END