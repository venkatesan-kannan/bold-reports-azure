INSERT INTO [BOLDRS_PermissionAccess] (Name, AccessId, IsActive) VALUES (N'Download',16,1)
;
INSERT INTO [BOLDRS_PermissionAccEntity] (PermissionEntityId, PermissionAccessId, IsActive) VALUES(1,5,1)
;
INSERT INTO [BOLDRS_PermissionAccEntity] (PermissionEntityId, PermissionAccessId, IsActive) VALUES(2,5,1)
;
INSERT INTO [BOLDRS_PermissionAccEntity] (PermissionEntityId, PermissionAccessId, IsActive) VALUES(3,5,1)
;
INSERT into [BOLDRS_LogField] (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EmbedSettings',N'EmbedSettings',GETDATE(),1)
;
INSERT into [BOLDRS_SystemSettings] ([Key],Value,ModifiedDate,IsActive) VALUES (N'IsEmbedEnabled',N'false',GETDATE(),1)
;
INSERT into [BOLDRS_SystemSettings] ([Key],Value,ModifiedDate,IsActive) VALUES (N'EmbedSecret',N'',GETDATE(),1)
;
INSERT into [BOLDRS_LogField] (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportSettings.ScheduleCustomBody',N'ReportSettings.ScheduleCustomBody',GETDATE(),1)
;
