export interface TransationServicePort {
    startTransaction();
    finishTransaction();
    commit();
    rollback();    
}