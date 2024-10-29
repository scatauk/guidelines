---
outline: deep
sidebar: false
---

# Logbook Standards <Badge type="warning" text="Pre-release" />

Technical Minimum Standards for Anaesthetic Logbooks

::: info Approval
SCATA Committee: 28th April 2024\
RCoA: 28th October 2024
:::

## Version Control

| Version | Date | Change log     |
| ------- | ---- | -------------- |
| 1.0     | TBA  | Public release |

## Background

The [Royal College of Anaesthetists (RCoA)](https://www.rcoa.ac.uk) has asked the [UK Society for Computing And Technology in Anaesthesia (SCATA)](https://www.scata.org.uk) to develop a set of _technical minimum standards for how an acceptable anaesthetic logbook functions_ in terms of _data storage_ and _management_ so that members have guidance and assurance on the selection of safe and acceptable logbook solutions.

This guidance was developed by SCATA Committee Members _Rob Penders_ (Secretary) and _JP Lomas_ (Chairman), with input from a Working Group convened in February 2024. A consultation for input from all SCATA members was undertaken in April 2024 alongside views from relevant RCoA committees and feedback has been incorporated.

The standards do not duplicate requirements and recommendations published elsewhere (e.g. best password handling and security practices. In particular, we advocate:

- The [Code of practice for app store operators and app developers](https://www.gov.uk/government/publications/code-of-practice-for-app-store-operators-and-app-developers) (_Gov.UK_)
- [Digital Technology Assessment Criteria (DTAC) - Key tools and information](https://transform.england.nhs.uk/key-tools-and-info/digital-technology-assessment-criteria-dtac/) (_NHS Transformation Directorate_)
- [A guide to good practice for digital and data-driven health technologies](https://www.gov.uk/government/publications/code-of-conduct-for-data-driven-health-and-care-technology/initial-code-of-conduct-for-data-driven-health-and-care-technology) (_Gov.UK_)

Compliance with the principles of these documents should be considered essential for any digital solution where applicable.

Throughout the SCATA standards, the terms [**ESSENTIAL**], [**DESIRABLE**] and [**OPTIONAL**] are used and highlighted. [**ESSENTIAL**] requirements are considered absolute, and a product would not be considered acceptable if these criteria were absent. [**DESIRABLE**] criteria could be absent with good cause or mitigation, but a user should exercise caution when choosing a solution should these criteria be absent. [**OPTIONAL**] features cover caveats that may not apply to all solutions and, where present, may have essential or desirable stipulations.

Additionally, we have assembled a set of criteria ([Appendix](#appendix-logbook-maturity-model-assessment)) to be used alongside a maturity model and industry-standard processes to evaluate and improve logbook solutions.

## Standards

### A. Platform

#### 1. Web Access

Web access is strongly advised as either the primary method of accessing the product or as an alternative means of accessing the logbook data. [**DESIRABLE**]

The vast majority of browser-based code is entirely backwards compatible, meaning that as new browser versions are made, older software will still be supported. The converse is not true of apps, where device operating system updates can render existing apps obsolete.

::: info Case study
A logbook released as a paid-for iPhone app ceased working following an update to Apple's iOS operating system, resulting in users losing access to their data.
:::

#### 2. Apps

If an app is provided [**OPTIONAL**], it should be available on more than one major mobile device platform [**DESIRABLE**]. To achieve this, solution developers should consider cross-platform development/deployment: a shared code base used for cross-platform support will reduce the risk of the logbook becoming obsolete on one platform (e.g. change in development personnel) and reduce the risk of incompatibilities should users switch platforms.

::: tip Technology Insight
Android and iOS use different languages for application development. This often increases the development overheads for teams producing apps for both platforms, as it requires development teams to work in parallel for the different platforms. However, there are a variety of cross-platform development tools (e.g. Flutter) that allow the production of apps for both iOS and Android from a single code base.
:::

### B. Storage

#### 1. Backup

Backups should be automated and not require any user activity [**ESSENTIAL**]. Cloud-based, off-device storage or backup should be the primary means of recording logbook cases [**DESIRABLE**] and be supported by a robust disaster recovery plan [**ESSENTIAL**]. Backup functionality should ideally include a means of version control [**DESIRABLE**].

::: tip Technology Insight
Version control allows users to roll back their data to a certain point in time and is supported by some cloud storage providers (e.g. Dropbox, Livedrive). This allows for data recovery in a wider range of failure scenarios. Similar functionality can be achieved crudely by storing or emailing timestamped data files.
:::

Where cloud-based storage or off-device backup is the primary data store, there should be minimal on-device data storage [**DESIRABLE**], usually limited to login credentials, cookies, tokens or cached data to facilitate off-line working in the event of poor network conditions.

Where the user is left to be custodians of their own data (i.e. cloud services are _not_ utilised) [**OPTIONAL**], there should be means and instructions to backup and restore this information [**DESIRABLE**] and advice on best backup practices provided as part of the product documentation [**DESIRABLE**].

::: info Case study
A logbook solution is provided as a highly functional spreadsheet. This relies on the user to continually save and backup their data. Unless the user takes manual action, there is no version control or off-device backup, increasing the risk of data loss.
:::

#### 2. Structure

A human-readable data format with a documented structure should be available [**ESSENTIAL**] as either a primary means of storage or export functionality.

::: info Case study

1. A logbook solution provides its data storage files in a human-readable format with an open-source description of the standard being used. This facilitates the migration or import of data by other products and reduces the overall user risk of data loss in the long term.

2. A logbook solution used a proprietary and undocumented file format. When the software became obsolete, users could not decode the saved data and export it to a new solution.

_NB. There are no current standards for logbook data storage or export file formats, though these are being discussed and developed._
:::

#### 3. Import

[**OPTIONAL**] The functionality to import data from other logbooks, case management or record systems is helpful for users, especially when accompanied by clear instructions on how to undertake the process [**DESIRABLE**] and roll back if it has not been successful [**ESSENTIAL**].

#### 4. Export

A user should be able to initiate an export of the entire logbook data to a human readable format (e.g. JSON, CSV, XML) [**ESSENTIAL**].

Exporting filtered subsets of logbook data (e.g. date range, speciality) provides the best functionality [**DESIRABLE**].

::: info Case study
Due to a software limitation, a logbook solution only allowed the export of a limited number of cases. This resulted in severe problems for users trying to export cases to produce adequate summary reports.
:::

#### 5. Deletion

Users should be able to permanently and securely delete their accounts, logbook content, and all associated data from any cloud-based services [**ESSENTIAL**].

### C. Reporting

Reporting requirements for anaesthetists in training are determined by the RCoA Training Committee based on the CCT curriculum requirements.

There are recommendations for logbook summary data for the [RCoA 2010 CCT Curriculum (page 87)](https://rcoa.ac.uk/sites/default/files/documents/2019-08/TRG-CU-CCT-ANAES2010.pdf), but this is not yet available for the 2021 curriculum.

Anaesthetists in non-training grades will likely have different requirements to meet their appraisal and revalidation requirements.

As reporting requirements are variable and can be subject to change, summary report production should be flexible [**ESSENTIAL**]. Users should be able to filter cases to include in the report summary based on date range/placement and speciality [**ESSENTIAL**], and the summary data should be cross-filtered by multiple user-defined categories, including age range, level of supervision and speciality [**DESIRABLE**].

Until updated guidance is released from the RCoA Training Committee, a summary report for anaesthetists in training should adhere to the specifications outlined in Appendix 4 of the [2010 CCT Curriculum](https://rcoa.ac.uk/sites/default/files/documents/2019-08/TRG-CU-CCT-ANAES2010.pdf) [**DESIRABLE**].

### D. Function & Content

#### 1. Create, Read, Update, Delete

There should be functionality to record cases, events, or clinical episodes as per the requirements of the CCT curriculum and the scope of practice of all grades of anaesthetists [**ESSENTIAL**]. There should also be a means of creating, viewing, updating, and deleting all user-generated data, including cases, reports, summaries, and customisations [**ESSENTIAL**].

#### 2. Patient Identifiable data

A logbook should not routinely collect patient-identifiable data or images [**ESSENTIAL**]. Where demographics are captured, they should be limited to the minimum required to produce the required summary reports, for example, using age _brackets_ rather than age or date of birth [**DESIRABLE**].

### E. Business Processes

#### 1. Terms of Service

Logbook providers should provide terms of service for using their product [**ESSENTIAL**] and be responsive to requests for technical support from their users [**ESSENTIAL**]. Providers should also be transparent in their practices, including plans for future development, product road maps, and open issues [**DESIRABLE**].

#### 2. Access

The provider's staff do not have routine access to logbook data [**ESSENTIAL**].

#### 3. Data transfer

Logbook data, including sanitised or aggregated data, should not be sold or transferred to third parties unless it is to fulfil legal or statutory requirements [**ESSENTIAL**].

#### 4. Research

Logbook data, even anonymised, should not be used in research, aggregate reports and publications, commercial purposes (except for internal evaluation, improvement, or to facilitate individual user support requests) or publication without the user’s "opt-in" consent [**ESSENTIAL**]. Consent should not be an opt-out process [**ESSENTIAL**], and where users are given the choice of opting in, this should be on a study-by-study basis with sufficient detail about the research to allow the user to make an informed participation decision [**ESSENTIAL**].

::: tip Technology Insight
Some technology solutions have a "use of data in perpetuity" clause, which does not provide users with granular information to decide how and where their data is used.
:::

## Summary

### Essential

1. Backups should be automated and not require any user activity.

2. If backups are cloud-based, they are supported by a robust disaster recovery plan.

3. A human-readable data format with a documented structure should be available as either a primary means of storage or export functionality.

4. If there is import functionality, rollback should occur if the process is unsuccessful.

5. A user should be able to initiate an export of the entire logbook data to a human-readable format (e.g. JSON, CSV, XML).

6. Users should be able to permanently and securely delete their accounts, logbook content, and all associated data from any cloud-based services.

7. Summary report production should be flexible and configurable by the user.

8. Users should be able to filter cases to include in the report summary based on date range/placement and speciality.

9. There should be functionality to record cases, events, or clinical episodes as per the requirements of the CCT curriculum and the scope of practice of all grades of anaesthetists.

10. Users should be able to create, view, update, and delete all user-generated data, including cases, reports, summaries, and customisations.

11. A logbook should not routinely collect patient-identifiable data or images.

12. Logbook providers should provide terms of service for the use of their products.

13. Logbook providers should be responsive to requests for technical support from their users.

14. The provider's staff do not have routine access to logbook data.

15. Logbook data, including sanitised or aggregated data, should not be sold or transferred to third parties unless it is to fulfil legal or statutory requirements.

16. Logbook data, even anonymised, should not be used in research, aggregate reports and publications, commercial purposes (except for internal evaluation, improvement, or to facilitate individual user support requests), or publication without the user’s “opt-in" consent.

17. Consent for the use of logbook data in research should not be an opt-out process.

18. Where users are given the choice of opting into research using logbook data, this should be on a study-by-study basis with sufficient detail about the research to allow the user to make an informed participation decision.

### Desirable

1. Web access is strongly advised as either the primary method of accessing the product or as an alternative means of accessing the logbook data.

2. If an app is provided, it should be available on multiple major mobile device platforms.

3. Cloud-based, off-device storage or backup should be the primary means of recording logbook cases.

4. Backups should provide a means of version control.

5. Where cloud-based storage or off-device backup is the primary data store, there should be minimal on-device data storage.

6. Logbooks _not_ utilising cloud-based backup should provide separate backup and restore functionality.

7. Logbooks that _do not_ use cloud-based backup should include advice on best backup practices in the product documentation.

8. Where import functionality is provided, it is supported by adequate documentation.

9. A user can export filtered subsets of logbook data (e.g. date range, speciality).

10. Summary data used for reports can be cross-filtered by multiple user-defined categories, including age range, level supervision and speciality.

11. Until updated guidance is released from the RCoA Training Committee, a summary report for anaesthetists in training should adhere to the specifications outlined in Appendix 4 of the [2010 CCT Curriculum](https://rcoa.ac.uk/sites/default/files/documents/2019-08/TRG-CU-CCT-ANAES2010.pdf).

12. Where demographics are captured, they should be limited to the minimum required to produce the required summary reports, such as using age brackets rather than age or date of birth.

13. Providers should be transparent in their practices, including plans for future development, product road-maps, and open issues.

### Optional

1. Apps _could_ be provided, though web access is strongly advised as either the primary method of accessing the product or as an alternative means of accessing the logbook data.

2. Users _could_ be custodians of their own data (i.e. cloud services are not utilised), subject to appropriate functionality and documentation.

3. Functionality to import data from other logbooks, case management or record systems.

## Appendix: Logbook Maturity Model Assessment

The criteria below can be used alongside a maturity model to evaluate and improve logbook solutions.

SCATA recommends the [Capability Maturity Model, CMM](https://insights.sei.cmu.edu/documents/1092/1993_005_001_16211.pdf), a framework that defines five maturity levels for continual process improvement:

> 1: Initial
>
> 2: Repeatable
>
> 3: Defined
>
> 4: Managed
>
> 5: Optimising

This framework is integral to most management systems and can assist in the assessment and improvement of development processes. However, a maturity model has limitations when undertaking a static or comparative analysis of a product.

The criteria outlined below are provided to fill this gap and can be assessed as [**ABSENT/UNCLEAR**], [**BASIC**] (where there is partial, incomplete, or suboptimal functionality) and [**MATURE**] (where complete, best practice functionality is evident).

### Criteria

- **Technical**
  - Architecture
  - Documentation
  - Standards compliance
  - Interoperability
    - Import
    - Export
  - Storage
  - Security
  - User management
- **Functionality**
  - Platform
  - Features
    - Achieves recognised minimal dataset
      - Now: summary page from 2010 curriculum
      - Upcoming: Updated standards / 2021 curriculum
    - Episode logging
    - CRUD
    - Summary
    - Import & Export
    - Backup & Restore
  - Documentation
- **Business Processes**
  - Support
  - Release/upgrade
  - Vulnerability disclosure
- **Governance**
  - Data
  - Data handling processes
- **Project Management**

## Feedback & Contributions

As advocates of open standards, SCATA welcomes feedback and contributions from members and non-members alike.  Pull requests via [Github](https://github.com/scatauk/guidelines/blob/main/logbook-standards.md) are welcome or any comments can be sent to [chairman@scata.org.uk](mailto:chairman@scata.org.uk).