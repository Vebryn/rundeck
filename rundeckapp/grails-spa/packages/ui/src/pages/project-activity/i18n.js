// Ready translated locale messages
const translationStrings = {
  fr_FR: {
    // missing Close, 
    'bulk.edit': 'Bulk Edit',
    'in.of': 'in',
    'execution': 'Ex\u00e9cution | Ex\u00e9cutions',
    'execution.count': '1 \u00e9x\u00e9cution | {0} \u00e9x\u00e9cutions',
    'Bulk Delete Executions: Results': 'Suppression en masse',
    'Requesting bulk delete, please wait.': 'Requesting bulk delete, please wait.',
    'bulkresult.attempted.text': 'Suppression des {0} ex\u00e9cutions',
    'bulkresult.success.text': '{0} ex\u00e9cutions ont \u00e9t\u00e9 supprim\u00e9es avec succ\u00e8s',
    'bulkresult.failed.text': '{0} ex\u00e9cutions n\'ont pas pu \00eatre supprim\u00e9es :',
    'delete.confirm.text': 'Voulez-vous vraiment supprimer ces {0} {1} ?',
    'clearselected.confirm.text': 'Quelles activit\00e9es voulez-vous d\00e9s\00e9lectionner ?',
    'bulk.selected.count': '{0} s\u00e9lect\u00e9e(s)',
    'results.empty.text': 'Aucune activit\u00e9',
    'Only shown executions': 'Celles affich\00e9es à l\'\00e9cran',
    'Clear bulk selection': 'Clear Bulk Selection',
    'Click to edit Search Query': 'Click to edit Search Query',
    'Auto refresh': 'Rafra\u00eechir automatiquement',
    'error.message.0': 'An Error Occurred: {0}',
    'info.completed.0': 'Termin\u00e9e : {0}',
    'info.completed.0.1': 'Termin\u00e9e {1} le {0}',
    'info.missed.0.1': 'Marked Missed: {0} {1}',
    'info.started.0': 'D\u00e9marr\u00e9 : {0}',
    'info.started.expected.0.1': 'D\u00e9marr\u00e9 : {0}, Fin estim\u00e9e : {1}',
    'info.scheduled.0': 'Scheduled; starting {0}',
    'job.execution.starting.0': 'Starting {0}',
    'info.newexecutions.since.0': '1 New Result. Click to load. | {0} New Results. Click to load.',
    'In the last Day': 'In the last Day',
    'Referenced': 'Referenced',
    'job.has.been.deleted.0': '(Job {0} has been deleted)',
    'Filters': 'Filters',
    'filter.delete.named.text': 'Delete Filter "{0}"...',
    'Delete Saved Filter': 'Delete Saved Filter',
    'filter.delete.confirm.text': 'Voulez-vous vraiment supprimer le filtre "{0}" ?',
    'filter.save.name.prompt': 'Nom',
    'filter.save.validation.name.blank': 'Le nom est obligatoire.',
    'filter.save.button': 'Save Filter...',
    'failed': '\u00e9chec(s)',
    'ok':'ok',
    '0.total':'{0} total',

    period: {
      label: {
        All: 'toutes',
        Hour: 'derni\u00e8re heure',
        Day: 'dernier jour',
        Week: 'derni\u00e8re semaine',
        Month: 'dernier mois'
      }
    }
  },
  en_US: {
    'bulk.edit': 'Bulk Edit',
    'in.of': 'in',
    'execution': 'Execution | Executions',
    'execution.count': '1 Execution | {0} Executions',
    'Bulk Delete Executions: Results': 'Bulk Delete Executions: Results',
    'Requesting bulk delete, please wait.': 'Requesting bulk delete, please wait.',
    'bulkresult.attempted.text': '{0} Executions were attempted.',
    'bulkresult.success.text': '{0} Executions were successfully deleted.',
    'bulkresult.failed.text': '{0} Executions could not be deleted:',
    'delete.confirm.text': 'Really delete {0} {1}?',
    'clearselected.confirm.text': 'Clear all {0} selected items, or only items shown on this page?',
    'bulk.selected.count': '{0} selected',
    'results.empty.text': 'No results for the query',
    'Only shown executions': 'Only shown executions',
    'Clear bulk selection': 'Clear Bulk Selection',
    'Click to edit Search Query': 'Click to edit Search Query',
    'Auto refresh': 'Auto refresh',
    'error.message.0': 'An Error Occurred: {0}',
    'info.completed.0': 'Completed: {0}',
    'info.completed.0.1': 'Completed: {0} {1}',
    'info.missed.0.1': 'Marked Missed: {0} {1}',
    'info.started.0': 'Started: {0}',
    'info.started.expected.0.1': 'Started: {0}, Estimated Finish: {1}',
    'info.scheduled.0': 'Scheduled; starting {0}',
    'job.execution.starting.0': 'Starting {0}',
    'info.newexecutions.since.0': '1 New Result. Click to load. | {0} New Results. Click to load.',
    'In the last Day': 'In the last Day',
    'Referenced': 'Referenced',
    'job.has.been.deleted.0': '(Job {0} has been deleted)',
    'Filters': 'Filters',
    'filter.delete.named.text': 'Delete Filter "{0}"...',
    'Delete Saved Filter': 'Delete Saved Filter',
    'filter.delete.confirm.text': 'Are you sure you want to delete the Saved Filter named "{0}"?',
    'filter.save.name.prompt': 'Name:',
    'filter.save.validation.name.blank': 'Name Cannot be blank',
    'filter.save.button': 'Save Filter...',
    'failed': 'failed',
    'ok':'ok',
    '0.total':'{0} total',

    period: {
      label: {
        All: 'any time',
        Hour: 'in the last Hour',
        Day: 'in the last Day',
        Week: 'in the last Week',
        Month: 'in the last Month'
      }
    }
  }
}

module.exports = {
  messages: translationStrings
}
